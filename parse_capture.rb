require 'pcap'

packets = Pcap::Capture.open_offline('websocket.pcap')

packets.each do |packet|
    puts packet.ip? && packet.ip_src
end

