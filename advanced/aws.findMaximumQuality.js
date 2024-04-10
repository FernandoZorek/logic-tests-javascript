/*
 * Complete the 'findMaximumQuality' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY packets
 *  2. INTEGER channels
 */

function findMaximumQuality(packets, channels) {
    const total = [];
    packets.sort((a, b) => a - b);
    let i = 1
    while (i <= channels-1) {
        total.push(packets.pop());
        i++;
    }
    
    let half = Math.floor(packets.length / 2);
    if (packets.length % 2)  half = packets[half];
    else half =  Math.ceil((packets[half - 1] + packets[half]) / 2.0);
        
    return Math.ceil(total.reduce((a, b) => a + b, 0) + half); 
}

const packets = [1, 2, 3, 4, 5];
const channels = 2;
findMaximumQuality(packets, channels); // 8


/**
 * Code Question 1

 * Amazon's AWS provides fast and efficient server solutions. The developers want to stress-test the quality of the servers' channels. They must ensure the following:

 * - Each of the packets must be sent via a single channel.

 * - Each of the channels must transfer at least one packet.

 * The quality of the transfer for a channel is defined by the median of the sizes of all the data packets sent through that channel.

 * Note: The median of an array is the middle element if the array is sorted in non-decreasing order. If the number of elements in the array is even, the median is the average of the two middle elements.

 * Find the maximum possible sum of the qualities of all channels. If the answer is a floating-point value, round it to the next higher integer.

 * Example

 * packets = [1, 2, 3, 4, 5] channels = 2

 * At least one packet has to go through each of the 2 channels. One maximal solution is to transfer packets (1, 2, 3, 4) through channel 1 and packet (5) through channel 2.


 * Channel 2

 * The quality of transfer for channel 1 is (2 + 3)/2 = 2.5 and that of channel 2 is 5. Their sum is 2.5 + 5 = 7.5 which rounds up to 8.

 * Function Description

 * Complete the function findMaximumQuality in the editor below.

 * findMaximumQuality has the following parameter(s): int packets[n]: the packet sizes int channels: the number of channels

 * Returns

 * long int: the maximum sum possible

 * Constraints

 * 1 ≤ len(packets) ≤ 5 * 105

 * 1 ≤ packets[i] < 109

 * 1 ≤ channels ≤ len(packets)
 */