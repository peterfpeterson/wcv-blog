module WebApiHelper
  def web_api(name)
    name = name.to_s

    result = '<script charset="utf-8" src="'
    if name == "google-maps"
      result << "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"
    elsif name == "d3"
      result << "http://d3js.org/d3.v3.min.js"
    else
      # just use the supplied name as is
      result << name
    end
    result << "\"></script>"

    result # echo the result
  end
end
