tcp_data = `tshark -r send.pcap -T fields -e data`.chomp

def tcp_data.get_char(n)
  [self].pack("H*")[n].unpack("C*")[0]
end

masking_key_start_index = 2
payload_start_index = 6
payload_length = tcp_data.get_char(1) & 0b01111111

data = ''
payload_length.times do |i|
  masking_key_char = tcp_data.get_char(masking_key_start_index + (i % 4))
  masked_char = tcp_data.get_char(payload_start_index + i)
  data << (masking_key_char ^ masked_char)
end

puts data