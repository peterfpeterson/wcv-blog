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
flag   :l, :list, 'show the list of maps and urls and do nothing'
#flag   :m, :more,  'do even more stuff'
#option :u, :url, 'specify url', :argument => :optional

module Nanoc::CLI::Commands

  class FetchMaps < ::Nanoc::CLI::CommandRunner

    def run
      # Make sure we are in a nanoc site directory
      require_site

      # build a hash of maps
      maps = Hash.new
      site.items.each do |item|
        if item[:map]
	  if !item[:map_gist]
            raise Nanoc::Errors::GenericTrivial, "Found map attribute without a map_gist attribute in \"#{item[:filename]}\""
	  end
	  maps[item[:map]] = item[:map_gist]
        end
      end

      # exit early if we are just listing
      if options[:list]
        maps.each {|key, value| puts "#{key} => #{value}" }
        return
      end

      puts maps

      stuff = options[:outdir] || 'content/relay/maps/'
      puts "Doing #{stuff}!"

      if options[:more]
        puts 'Doing it even more!'
      end
    end

  private

    def doSomething
      puts "blah"
    end

  end

end

runner Nanoc::CLI::Commands::FetchMaps
