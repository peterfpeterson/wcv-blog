usage       'fetchmaps [options]'
summary     'gets json maps'
description <<-EOS
This command downloads a geojson map to contents/relay/maps and appends a path to it.

The plan is to use https://developer.github.com/v3/gists/ to get the most recent version.
EOS

flag   :h, :help,  'show help for this command' do |value, cmd|
  puts cmd.help
  exit 0
end
#flag   :m, :more,  'do even more stuff'
option :u, :url, 'specify url', :argument => :optional

module Nanoc::CLI::Commands

  class FetchMaps < ::Nanoc::CLI::CommandRunner

    def run
      puts "Doing stuff!"
    end
  end

end

#run do |opts, args, cmd|
#  stuff = opts[:stuff] || 'generic stuff'
#  puts "Doing #{stuff}!"
#
#  if opts[:more]
#    puts 'Doing it even more!'
#  end
#end

runner Nanoc::CLI::Commands::FetchMaps
