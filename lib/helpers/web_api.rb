module WebApiHelper
  def web_api(name)
    name = name.to_s

    result = '<script charset="utf-8" src="'
    if name == "google-maps"
      result << "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"
    elsif name == "d3"
      result << "http://d3js.org/d3.v3.min.js"
    elsif name == "dynatable"
      result << "/js/vendor/dynatable-0.3.1.js"
    elsif name == "jquery"
        result << "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js\"></script>\n  "
        result << "<script>window.jQuery || document.write('<script src=\"/js/vendor/jquery-1.11.1.min.js\"><\\/script>')</script>\n  "
        result << "<script src=\"/js/plugins.js\"></script>\n  "
        result << "<script src=\"/js/main.js"
    else
      # just use the supplied name as is
      result << name
    end

    result << "\"></script>"

    result # echo the result
  end
end
