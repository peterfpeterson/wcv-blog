// var $table = $('#my-final-table');

// create the data
// function toJsonTable(minutes, seconds)
// {
//   seconds = 60*minutes+seconds;
//
//   var data = [];
//   data.push({distance:"1 mile",evenPaceTime:seconds});
//   data.push({distance:"5 km",evenPaceTime:(seconds*3.1)});
//   data.push({distance:"8 km",evenPaceTime:(seconds*5.0)});
//   data.push({distance:"10 km",evenPaceTime:(seconds*6.2)});
//   data.push({distance:"half marathon",evenPaceTime:(seconds*13.1)});
//   data.push({distance:"30 km", evenPaceTime:(seconds*18.6)});
//   data.push({distance:"marathon",evenPaceTime:(seconds*26.2)});
//   return data;
// }
// var data = toJsonTable(8,0);

// function updateTable()
// {
//   var distance = $('#inDistance').val();
//   var time = $('#inTime').val();
//   var pace = Math.floor(timeToSec(time) / distance);
//
//   var dynatable = $('#my-final-table').data('dynatable');
//   dynatable.settings.dataset.originalRecords = toJsonTable(0, pace);
//   dynatable.process();
// }

// var $inputs = $('#inputs');
// $inputs.bind('input', updateTable);

// $(document).ready(function(){
//     $('#inDistance').change(function(){ updateTable(); });
//     $('#inTime').change(function(){ updateTable(); });
// });

// configure how the table fills in
// $.dynatableSetup({
//   features: {
//     paginate: false,
//     sort: false,
//     pushState: true,
//     search: false,
//     recordCount: false,
//     perPageSelect: false
//   }
// });

function pad(number, length) {

    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }

    return str;

}

function secToTime(seconds)
{
  var hh = Math.floor(seconds / 3600);
  var ss = seconds - (hh * 3600);
  var mm = Math.floor(ss / 60);
  ss = Math.floor(ss - (mm * 60));

  return pad(hh, 1) +":" + pad(mm,2) + ":" + pad(ss,2);
}

function timeToSec(time)
{
  var splitted = time.split(":");
  if (splitted.length < 2)
  {
    return Math.floor(time);
  }
  else if (splitted.length == 2)
  { // mm:ss
    return Math.floor(splitted[0])*60 + Math.floor(splitted[1]);
  }
  else if (splitted.length == 3)
  { // hh:mm:ss
    return Math.floor(splitted[0])*3600 + Math.floor(splitted[1])*60 + Math.floor(splitted[2]);
  }
  return -1;
}

// Function that renders the list items from our records
// function rowWriter(rowIndex, record, columns, cellWriter) {
//   var row = '<tr>';
//   row = row + "<td>" + record.distance + "</td>";
//   row = row + "<td><center>" + secToTime(record.evenPaceTime) + "</center></td>";
//   // if (rowIndex % 3 === 0) { cssClass += ' first'; }
//   // li = '<li class="' + cssClass + '"><div class="thumbnail"><div class="thumbnail-image">' + record.thumbnail + '</div><div class="caption">' + record.caption + '</div></div></li>';
//   row = row + '</tr>'
//   return row;
// }

// link the json data to the table
// $('#my-final-table').dynatable({
//   dataset: {
//     records: data
//   },
//   writers: {
//     _rowWriter: rowWriter
//   }
// });
// dynatable.dom.update();
