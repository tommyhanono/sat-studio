/* SAT Studio question set — Math: Nonlinear Functions on the Graph (NFN-01 to NFN-11) */
(function(){
  /* Cuatro figuras, todas SVG inline con viewBox propio, role="img" y un aria-label
     que se basta solo: un estudiante con lector de pantalla oye los cortes con los
     ejes, el punto más alto o más bajo y los extremos del trozo dibujado, así que
     puede contestar sin ver nada. Los números dibujados salen de la misma fórmula
     que usa la explicación, y las etiquetas llevan halo blanco (paint-order) para
     que la curva nunca se las coma.

     FIG_UP     y = (x − 3)² − 4      cortes en 1 y 5, mínimo (3, −4), y-int (0, 5)
     FIG_ZEROS  y = (x+3)(x−1)(x−4)/6 cortes en −3, 1 y 4
     FIG_DOWN   y = −(x − 1)² + 4     máximo (1, 4), dibujada solo en −2 ≤ x ≤ 4
     FIG_RANGE  y = 0.5(x − 1)² − 3   dibujada solo en −1 ≤ x ≤ 5, extremos con punto */

  var FIG_UP =
    '<svg viewBox="0 0 298 244" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The graph of y = f(x) in the xy-plane is a parabola that opens upward. It crosses the x-axis at x = 1 and at x = 5, its lowest point is at (3, negative 4), and it crosses the y-axis at (0, 5). The piece drawn runs from (0, 5) on the left to (6, 5) on the right."><g fill="none" stroke="#e8e8e8" stroke-width="1"><path d="M44 14V218M72 14V218M100 14V218M128 14V218M156 14V218M184 14V218M212 14V218M240 14V218M268 14V218M30 209.5H282M30 192.5H282M30 175.5H282M30 158.5H282M30 141.5H282M30 124.5H282M30 107.5H282M30 90.5H282M30 73.5H282M30 56.5H282M30 39.5H282M30 22.5H282"/></g><path d="M30 124.5H282M72 218V14" fill="none" stroke="#1e1e1e" stroke-width="1.4"/><polyline points="72,39.5 72.6,41.8 73.3,44.2 73.9,46.5 74.6,48.8 75.2,51 75.9,53.3 76.5,55.5 77.2,57.8 77.8,60 78.5,62.1 79.1,64.3 79.8,66.4 80.4,68.6 81,70.7 81.7,72.8 82.3,74.8 83,76.9 83.6,78.9 84.3,81 84.9,83 85.6,84.9 86.2,86.9 86.9,88.8 87.5,90.8 88.2,92.7 88.8,94.6 89.4,96.5 90.1,98.3 90.7,100.1 91.4,102 92,103.8 92.7,105.6 93.3,107.3 94,109.1 94.6,110.8 95.3,112.5 95.9,114.2 96.6,115.9 97.2,117.5 97.8,119.2 98.5,120.8 99.1,122.4 99.8,124 100.4,125.5 101.1,127.1 101.7,128.6 102.4,130.1 103,131.6 103.7,133.1 104.3,134.6 105,136 105.6,137.4 106.2,138.8 106.9,140.2 107.5,141.6 108.2,142.9 108.8,144.3 109.5,145.6 110.1,146.9 110.8,148.1 111.4,149.4 112.1,150.6 112.7,151.9 113.4,153.1 114,154.3 114.6,155.4 115.3,156.6 115.9,157.7 116.6,158.8 117.2,159.9 117.9,161 118.5,162 119.2,163.1 119.8,164.1 120.5,165.1 121.1,166.1 121.8,167.1 122.4,168 123,169 123.7,169.9 124.3,170.8 125,171.6 125.6,172.5 126.3,173.3 126.9,174.2 127.6,175 128.2,175.8 128.9,176.5 129.5,177.3 130.2,178 130.8,178.7 131.4,179.4 132.1,180.1 132.7,180.8 133.4,181.4 134,182 134.7,182.6 135.3,183.2 136,183.8 136.6,184.4 137.3,184.9 137.9,185.4 138.6,185.9 139.2,186.4 139.8,186.8 140.5,187.3 141.1,187.7 141.8,188.1 142.4,188.5 143.1,188.9 143.7,189.2 144.4,189.6 145,189.9 145.7,190.2 146.3,190.5 147,190.7 147.6,191 148.2,191.2 148.9,191.4 149.5,191.6 150.2,191.8 150.8,191.9 151.5,192.1 152.1,192.2 152.8,192.3 153.4,192.4 154.1,192.4 154.7,192.5 155.4,192.5 156,192.5 156.6,192.5 157.3,192.5 157.9,192.4 158.6,192.4 159.2,192.3 159.9,192.2 160.5,192.1 161.2,191.9 161.8,191.8 162.5,191.6 163.1,191.4 163.8,191.2 164.4,191 165,190.7 165.7,190.5 166.3,190.2 167,189.9 167.6,189.6 168.3,189.2 168.9,188.9 169.6,188.5 170.2,188.1 170.9,187.7 171.5,187.3 172.2,186.8 172.8,186.4 173.4,185.9 174.1,185.4 174.7,184.9 175.4,184.4 176,183.8 176.7,183.2 177.3,182.6 178,182 178.6,181.4 179.3,180.8 179.9,180.1 180.6,179.4 181.2,178.7 181.8,178 182.5,177.3 183.1,176.5 183.8,175.8 184.4,175 185.1,174.2 185.7,173.3 186.4,172.5 187,171.6 187.7,170.8 188.3,169.9 189,169 189.6,168 190.2,167.1 190.9,166.1 191.5,165.1 192.2,164.1 192.8,163.1 193.5,162 194.1,161 194.8,159.9 195.4,158.8 196.1,157.7 196.7,156.6 197.4,155.4 198,154.3 198.6,153.1 199.3,151.9 199.9,150.6 200.6,149.4 201.2,148.1 201.9,146.9 202.5,145.6 203.2,144.3 203.8,142.9 204.5,141.6 205.1,140.2 205.8,138.8 206.4,137.4 207,136 207.7,134.6 208.3,133.1 209,131.6 209.6,130.1 210.3,128.6 210.9,127.1 211.6,125.5 212.2,124 212.9,122.4 213.5,120.8 214.2,119.2 214.8,117.5 215.4,115.9 216.1,114.2 216.7,112.5 217.4,110.8 218,109.1 218.7,107.3 219.3,105.6 220,103.8 220.6,102 221.3,100.1 221.9,98.3 222.6,96.5 223.2,94.6 223.8,92.7 224.5,90.8 225.1,88.8 225.8,86.9 226.4,84.9 227.1,83 227.7,81 228.4,78.9 229,76.9 229.7,74.8 230.3,72.8 231,70.7 231.6,68.6 232.2,66.4 232.9,64.3 233.5,62.1 234.2,60 234.8,57.8 235.5,55.5 236.1,53.3 236.8,51 237.4,48.8 238.1,46.5 238.7,44.2 239.4,41.8 240,39.5" fill="none" stroke="#324DC7" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/><g font-size="11" font-family="Georgia,serif" fill="#1e1e1e" stroke="#ffffff" stroke-width="4.5" stroke-linejoin="round" paint-order="stroke fill"><text x="44" y="139.5" text-anchor="middle">−1</text><text x="96" y="139.5" text-anchor="end">1</text><text x="156" y="139.5" text-anchor="middle">3</text><text x="216" y="139.5" text-anchor="start">5</text><text x="268" y="139.5" text-anchor="middle">7</text><text x="65" y="196.5" text-anchor="end">−4</text><text x="65" y="162.5" text-anchor="end">−2</text><text x="65" y="94.5" text-anchor="end">2</text><text x="65" y="60.5" text-anchor="end">4</text><text x="65" y="26.5" text-anchor="end">6</text><text x="280" y="116.5" text-anchor="end" font-size="12" font-style="italic">x</text><text x="81" y="25" font-size="12" font-style="italic">y</text><text x="280" y="238" text-anchor="end" font-size="12">y = f(x)</text></g></svg>';

  var FIG_ZEROS =
    '<svg viewBox="0 0 340 221" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The graph of y = f(x) in the xy-plane is a smooth curve that crosses the x-axis at exactly three points: x = negative 3, x = 1 and x = 4. Reading from left to right, the curve comes up from below the x-axis, crosses it at x = negative 3, turns over at a high point near (negative 1.4, 3.5), comes back down through the y-axis at (0, 2), crosses the x-axis again at x = 1, keeps falling to a low point near (2.7, negative 2.1), and then rises and crosses the x-axis a third time at x = 4."><g fill="none" stroke="#e8e8e8" stroke-width="1"><path d="M42 14V194.6M72 14V194.6M102 14V194.6M132 14V194.6M162 14V194.6M192 14V194.6M222 14V194.6M252 14V194.6M282 14V194.6M312 14V194.6M30 188.3H324M30 167.3H324M30 146.3H324M30 125.3H324M30 104.3H324M30 83.3H324M30 62.3H324M30 41.3H324M30 20.3H324"/></g><path d="M30 104.3H324M162 194.6V14" fill="none" stroke="#1e1e1e" stroke-width="1.4"/><polyline points="54,177.7 55,173 55.9,168.4 56.9,164 57.8,159.5 58.8,155.2 59.7,151 60.7,146.8 61.7,142.8 62.6,138.8 63.6,134.9 64.5,131.1 65.5,127.4 66.5,123.8 67.4,120.2 68.4,116.7 69.3,113.4 70.3,110 71.2,106.8 72.2,103.7 73.2,100.6 74.1,97.6 75.1,94.7 76,91.8 77,89.1 77.9,86.4 78.9,83.8 79.9,81.2 80.8,78.7 81.8,76.3 82.7,74 83.7,71.8 84.6,69.6 85.6,67.5 86.6,65.4 87.5,63.4 88.5,61.5 89.4,59.7 90.4,57.9 91.4,56.2 92.3,54.5 93.3,52.9 94.2,51.4 95.2,49.9 96.1,48.5 97.1,47.2 98.1,45.9 99,44.7 100,43.6 100.9,42.5 101.9,41.4 102.8,40.4 103.8,39.5 104.8,38.6 105.7,37.8 106.7,37.1 107.6,36.4 108.6,35.7 109.5,35.1 110.5,34.5 111.5,34 112.4,33.6 113.4,33.2 114.3,32.8 115.3,32.5 116.3,32.3 117.2,32.1 118.2,31.9 119.1,31.8 120.1,31.7 121,31.7 122,31.7 123,31.8 123.9,31.9 124.9,32 125.8,32.2 126.8,32.4 127.7,32.7 128.7,33 129.7,33.3 130.6,33.7 131.6,34.1 132.5,34.6 133.5,35 134.4,35.6 135.4,36.1 136.4,36.7 137.3,37.3 138.3,38 139.2,38.6 140.2,39.4 141.2,40.1 142.1,40.9 143.1,41.7 144,42.5 145,43.4 145.9,44.2 146.9,45.1 147.9,46.1 148.8,47 149.8,48 150.7,49 151.7,50 152.6,51.1 153.6,52.1 154.6,53.2 155.5,54.3 156.5,55.5 157.4,56.6 158.4,57.8 159.3,59 160.3,60.1 161.3,61.4 162.2,62.6 163.2,63.8 164.1,65.1 165.1,66.3 166.1,67.6 167,68.9 168,70.2 168.9,71.5 169.9,72.8 170.8,74.2 171.8,75.5 172.8,76.8 173.7,78.2 174.7,79.5 175.6,80.9 176.6,82.3 177.5,83.6 178.5,85 179.5,86.4 180.4,87.8 181.4,89.1 182.3,90.5 183.3,91.9 184.2,93.3 185.2,94.6 186.2,96 187.1,97.4 188.1,98.8 189,100.1 190,101.5 191,102.8 191.9,104.2 192.9,105.5 193.8,106.8 194.8,108.2 195.7,109.5 196.7,110.8 197.7,112.1 198.6,113.3 199.6,114.6 200.5,115.9 201.5,117.1 202.4,118.3 203.4,119.6 204.4,120.8 205.3,121.9 206.3,123.1 207.2,124.3 208.2,125.4 209.1,126.5 210.1,127.6 211.1,128.7 212,129.7 213,130.8 213.9,131.8 214.9,132.8 215.9,133.7 216.8,134.7 217.8,135.6 218.7,136.5 219.7,137.3 220.6,138.2 221.6,139 222.6,139.7 223.5,140.5 224.5,141.2 225.4,141.9 226.4,142.6 227.3,143.2 228.3,143.8 229.3,144.4 230.2,144.9 231.2,145.4 232.1,145.8 233.1,146.3 234,146.7 235,147 236,147.3 236.9,147.6 237.9,147.8 238.8,148 239.8,148.2 240.8,148.3 241.7,148.4 242.7,148.4 243.6,148.4 244.6,148.3 245.5,148.2 246.5,148.1 247.5,147.9 248.4,147.6 249.4,147.3 250.3,147 251.3,146.6 252.2,146.2 253.2,145.7 254.2,145.2 255.1,144.6 256.1,143.9 257,143.2 258,142.5 258.9,141.7 259.9,140.8 260.9,139.9 261.8,139 262.8,137.9 263.7,136.9 264.7,135.7 265.7,134.5 266.6,133.3 267.6,132 268.5,130.6 269.5,129.1 270.4,127.6 271.4,126.1 272.4,124.4 273.3,122.7 274.3,121 275.2,119.2 276.2,117.3 277.1,115.3 278.1,113.3 279.1,111.2 280,109 281,106.8 281.9,104.5 282.9,102.1 283.8,99.6 284.8,97.1 285.8,94.5 286.7,91.9 287.7,89.1 288.6,86.3 289.6,83.4 290.6,80.4 291.5,77.4 292.5,74.3 293.4,71 294.4,67.8 295.3,64.4 296.3,60.9 297.3,57.4 298.2,53.8 299.2,50.1 300.1,46.3 301.1,42.5 302,38.5 303,34.5" fill="none" stroke="#324DC7" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/><g font-size="11" font-family="Georgia,serif" fill="#1e1e1e" stroke="#ffffff" stroke-width="4.5" stroke-linejoin="round" paint-order="stroke fill"><text x="42" y="119.3" text-anchor="middle">−4</text><text x="76" y="119.3" text-anchor="start">−3</text><text x="102" y="119.3" text-anchor="middle">−2</text><text x="132" y="119.3" text-anchor="middle">−1</text><text x="188" y="119.3" text-anchor="end">1</text><text x="222" y="119.3" text-anchor="middle">2</text><text x="252" y="119.3" text-anchor="middle">3</text><text x="286" y="119.3" text-anchor="start">4</text><text x="312" y="119.3" text-anchor="middle">5</text><text x="155" y="171.3" text-anchor="end">−3</text><text x="155" y="129.3" text-anchor="end">−1</text><text x="155" y="87.3" text-anchor="end">1</text><text x="322" y="96.3" text-anchor="end" font-size="12" font-style="italic">x</text><text x="171" y="25" font-size="12" font-style="italic">y</text><text x="322" y="215" text-anchor="end" font-size="12">y = f(x)</text></g></svg>';

  var FIG_DOWN =
    '<svg viewBox="0 0 284 229" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The graph of y = f(x) in the xy-plane is a parabola that opens downward, drawn only for x from negative 2 to 4, with a solid dot marking each end. Its highest point is (1, 4). It crosses the x-axis at x = negative 1 and at x = 3, and it crosses the y-axis at (0, 3). The two endpoints of the piece drawn are (negative 2, negative 5) and (4, negative 5)."><g fill="none" stroke="#e8e8e8" stroke-width="1"><path d="M40.8 14V202.8M67.8 14V202.8M94.8 14V202.8M121.8 14V202.8M148.8 14V202.8M175.8 14V202.8M202.8 14V202.8M229.8 14V202.8M256.8 14V202.8M30 196.4H267.6M30 180.4H267.6M30 164.4H267.6M30 148.4H267.6M30 132.4H267.6M30 116.4H267.6M30 100.4H267.6M30 84.4H267.6M30 68.4H267.6M30 52.4H267.6M30 36.4H267.6M30 20.4H267.6"/></g><path d="M30 100.4H267.6M121.8 202.8V14" fill="none" stroke="#1e1e1e" stroke-width="1.4"/><polyline points="67.8,180.4 68.4,178.2 69,176 69.7,173.8 70.3,171.7 70.9,169.5 71.5,167.4 72.2,165.3 72.8,163.2 73.4,161.2 74,159.1 74.7,157.1 75.3,155 75.9,153 76.5,151.1 77.1,149.1 77.8,147.1 78.4,145.2 79,143.3 79.6,141.4 80.3,139.5 80.9,137.6 81.5,135.8 82.1,134 82.8,132.1 83.4,130.3 84,128.6 84.6,126.8 85.2,125 85.9,123.3 86.5,121.6 87.1,119.9 87.7,118.2 88.4,116.6 89,114.9 89.6,113.3 90.2,111.7 90.9,110.1 91.5,108.5 92.1,107 92.7,105.4 93.3,103.9 94,102.4 94.6,100.9 95.2,99.4 95.8,98 96.5,96.5 97.1,95.1 97.7,93.7 98.3,92.3 99,90.9 99.6,89.6 100.2,88.2 100.8,86.9 101.4,85.6 102.1,84.3 102.7,83.1 103.3,81.8 103.9,80.6 104.6,79.4 105.2,78.2 105.8,77 106.4,75.8 107.1,74.6 107.7,73.5 108.3,72.4 108.9,71.3 109.5,70.2 110.2,69.2 110.8,68.1 111.4,67.1 112,66.1 112.7,65.1 113.3,64.1 113.9,63.1 114.5,62.2 115.2,61.2 115.8,60.3 116.4,59.4 117,58.6 117.6,57.7 118.3,56.9 118.9,56 119.5,55.2 120.1,54.4 120.8,53.7 121.4,52.9 122,52.2 122.6,51.4 123.3,50.7 123.9,50 124.5,49.4 125.1,48.7 125.7,48.1 126.4,47.4 127,46.8 127.6,46.2 128.2,45.7 128.9,45.1 129.5,44.6 130.1,44.1 130.7,43.6 131.4,43.1 132,42.6 132.6,42.2 133.2,41.7 133.8,41.3 134.5,40.9 135.1,40.5 135.7,40.2 136.3,39.8 137,39.5 137.6,39.2 138.2,38.9 138.8,38.6 139.5,38.3 140.1,38.1 140.7,37.8 141.3,37.6 141.9,37.4 142.6,37.3 143.2,37.1 143.8,36.9 144.4,36.8 145.1,36.7 145.7,36.6 146.3,36.5 146.9,36.5 147.6,36.4 148.2,36.4 148.8,36.4 149.4,36.4 150,36.4 150.7,36.5 151.3,36.5 151.9,36.6 152.5,36.7 153.2,36.8 153.8,36.9 154.4,37.1 155,37.3 155.7,37.4 156.3,37.6 156.9,37.8 157.5,38.1 158.1,38.3 158.8,38.6 159.4,38.9 160,39.2 160.6,39.5 161.3,39.8 161.9,40.2 162.5,40.5 163.1,40.9 163.8,41.3 164.4,41.7 165,42.2 165.6,42.6 166.2,43.1 166.9,43.6 167.5,44.1 168.1,44.6 168.7,45.1 169.4,45.7 170,46.2 170.6,46.8 171.2,47.4 171.9,48.1 172.5,48.7 173.1,49.4 173.7,50 174.3,50.7 175,51.4 175.6,52.2 176.2,52.9 176.8,53.7 177.5,54.4 178.1,55.2 178.7,56 179.3,56.9 180,57.7 180.6,58.6 181.2,59.4 181.8,60.3 182.4,61.2 183.1,62.2 183.7,63.1 184.3,64.1 184.9,65.1 185.6,66.1 186.2,67.1 186.8,68.1 187.4,69.2 188.1,70.2 188.7,71.3 189.3,72.4 189.9,73.5 190.5,74.6 191.2,75.8 191.8,77 192.4,78.2 193,79.4 193.7,80.6 194.3,81.8 194.9,83.1 195.5,84.3 196.2,85.6 196.8,86.9 197.4,88.2 198,89.6 198.6,90.9 199.3,92.3 199.9,93.7 200.5,95.1 201.1,96.5 201.8,98 202.4,99.4 203,100.9 203.6,102.4 204.3,103.9 204.9,105.4 205.5,107 206.1,108.5 206.7,110.1 207.4,111.7 208,113.3 208.6,114.9 209.2,116.6 209.9,118.2 210.5,119.9 211.1,121.6 211.7,123.3 212.4,125 213,126.8 213.6,128.6 214.2,130.3 214.8,132.1 215.5,134 216.1,135.8 216.7,137.6 217.3,139.5 218,141.4 218.6,143.3 219.2,145.2 219.8,147.1 220.5,149.1 221.1,151.1 221.7,153 222.3,155 222.9,157.1 223.6,159.1 224.2,161.2 224.8,163.2 225.4,165.3 226.1,167.4 226.7,169.5 227.3,171.7 227.9,173.8 228.6,176 229.2,178.2 229.8,180.4" fill="none" stroke="#324DC7" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/><circle cx="67.8" cy="180.4" r="4.2" fill="#324DC7"/><circle cx="229.8" cy="180.4" r="4.2" fill="#324DC7"/><g font-size="11" font-family="Georgia,serif" fill="#1e1e1e" stroke="#ffffff" stroke-width="4.5" stroke-linejoin="round" paint-order="stroke fill"><text x="40.8" y="115.4" text-anchor="middle">−3</text><text x="98.8" y="115.4" text-anchor="start">−1</text><text x="148.8" y="115.4" text-anchor="middle">1</text><text x="198.8" y="115.4" text-anchor="end">3</text><text x="256.8" y="115.4" text-anchor="middle">5</text><text x="114.8" y="200.4" text-anchor="end">−6</text><text x="114.8" y="168.4" text-anchor="end">−4</text><text x="114.8" y="136.4" text-anchor="end">−2</text><text x="114.8" y="40.4" text-anchor="end">4</text><text x="265.6" y="92.4" text-anchor="end" font-size="12" font-style="italic">x</text><text x="130.8" y="25" font-size="12" font-style="italic">y</text><text x="265.6" y="223" text-anchor="end" font-size="12">y = f(x)</text></g></svg>';

  var FIG_RANGE =
    '<svg viewBox="0 0 284 224" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The complete graph of the function f in the xy-plane is a piece of an upward-opening curve, drawn only from x = negative 1 to x = 5, with a solid dot marking each end. The left endpoint is (negative 1, negative 1). Going right, the curve falls to its lowest point at (1, negative 3), then rises through (3, negative 1) and (4, 1.5) up to the right endpoint (5, 5). The x-axis tick numbers are printed just above the x-axis."><g fill="none" stroke="#e8e8e8" stroke-width="1"><path d="M40.8 14V197.6M67.8 14V197.6M94.8 14V197.6M121.8 14V197.6M148.8 14V197.6M175.8 14V197.6M202.8 14V197.6M229.8 14V197.6M256.8 14V197.6M30 190.8H267.6M30 173.8H267.6M30 156.8H267.6M30 139.8H267.6M30 122.8H267.6M30 105.8H267.6M30 88.8H267.6M30 71.8H267.6M30 54.8H267.6M30 37.8H267.6M30 20.8H267.6"/></g><path d="M30 122.8H267.6M94.8 197.6V14" fill="none" stroke="#1e1e1e" stroke-width="1.4"/><polyline points="67.8,139.8 68.4,140.6 69,141.4 69.7,142.1 70.3,142.9 70.9,143.6 71.5,144.3 72.2,145.1 72.8,145.8 73.4,146.5 74,147.2 74.7,147.9 75.3,148.6 75.9,149.2 76.5,149.9 77.1,150.6 77.8,151.2 78.4,151.8 79,152.5 79.6,153.1 80.3,153.7 80.9,154.3 81.5,154.9 82.1,155.5 82.8,156 83.4,156.6 84,157.1 84.6,157.7 85.2,158.2 85.9,158.7 86.5,159.3 87.1,159.8 87.7,160.3 88.4,160.8 89,161.2 89.6,161.7 90.2,162.2 90.9,162.6 91.5,163.1 92.1,163.5 92.7,163.9 93.3,164.4 94,164.8 94.6,165.2 95.2,165.6 95.8,165.9 96.5,166.3 97.1,166.7 97.7,167 98.3,167.4 99,167.7 99.6,168 100.2,168.4 100.8,168.7 101.4,169 102.1,169.3 102.7,169.5 103.3,169.8 103.9,170.1 104.6,170.3 105.2,170.6 105.8,170.8 106.4,171 107.1,171.3 107.7,171.5 108.3,171.7 108.9,171.9 109.5,172 110.2,172.2 110.8,172.4 111.4,172.5 112,172.7 112.7,172.8 113.3,173 113.9,173.1 114.5,173.2 115.2,173.3 115.8,173.4 116.4,173.5 117,173.5 117.6,173.6 118.3,173.7 118.9,173.7 119.5,173.7 120.1,173.8 120.8,173.8 121.4,173.8 122,173.8 122.6,173.8 123.3,173.8 123.9,173.7 124.5,173.7 125.1,173.7 125.7,173.6 126.4,173.6 127,173.5 127.6,173.4 128.2,173.3 128.9,173.2 129.5,173.1 130.1,173 130.7,172.9 131.4,172.7 132,172.6 132.6,172.4 133.2,172.3 133.8,172.1 134.5,171.9 135.1,171.7 135.7,171.5 136.3,171.3 137,171.1 137.6,170.9 138.2,170.7 138.8,170.4 139.5,170.2 140.1,169.9 140.7,169.6 141.3,169.4 141.9,169.1 142.6,168.8 143.2,168.5 143.8,168.1 144.4,167.8 145.1,167.5 145.7,167.1 146.3,166.8 146.9,166.4 147.6,166.1 148.2,165.7 148.8,165.3 149.4,164.9 150,164.5 150.7,164.1 151.3,163.7 151.9,163.2 152.5,162.8 153.2,162.3 153.8,161.9 154.4,161.4 155,160.9 155.7,160.4 156.3,159.9 156.9,159.4 157.5,158.9 158.1,158.4 158.8,157.9 159.4,157.3 160,156.8 160.6,156.2 161.3,155.6 161.9,155.1 162.5,154.5 163.1,153.9 163.8,153.3 164.4,152.7 165,152 165.6,151.4 166.2,150.8 166.9,150.1 167.5,149.5 168.1,148.8 168.7,148.1 169.4,147.4 170,146.7 170.6,146 171.2,145.3 171.9,144.6 172.5,143.9 173.1,143.1 173.7,142.4 174.3,141.6 175,140.8 175.6,140.1 176.2,139.3 176.8,138.5 177.5,137.7 178.1,136.9 178.7,136 179.3,135.2 180,134.4 180.6,133.5 181.2,132.7 181.8,131.8 182.4,130.9 183.1,130 183.7,129.1 184.3,128.2 184.9,127.3 185.6,126.4 186.2,125.5 186.8,124.5 187.4,123.6 188.1,122.6 188.7,121.7 189.3,120.7 189.9,119.7 190.5,118.7 191.2,117.7 191.8,116.7 192.4,115.7 193,114.6 193.7,113.6 194.3,112.5 194.9,111.5 195.5,110.4 196.2,109.3 196.8,108.3 197.4,107.2 198,106.1 198.6,104.9 199.3,103.8 199.9,102.7 200.5,101.6 201.1,100.4 201.8,99.2 202.4,98.1 203,96.9 203.6,95.7 204.3,94.5 204.9,93.3 205.5,92.1 206.1,90.9 206.7,89.7 207.4,88.4 208,87.2 208.6,85.9 209.2,84.7 209.9,83.4 210.5,82.1 211.1,80.8 211.7,79.5 212.4,78.2 213,76.9 213.6,75.5 214.2,74.2 214.8,72.9 215.5,71.5 216.1,70.1 216.7,68.8 217.3,67.4 218,66 218.6,64.6 219.2,63.2 219.8,61.7 220.5,60.3 221.1,58.9 221.7,57.4 222.3,56 222.9,54.5 223.6,53 224.2,51.6 224.8,50.1 225.4,48.6 226.1,47.1 226.7,45.5 227.3,44 227.9,42.5 228.6,40.9 229.2,39.4 229.8,37.8" fill="none" stroke="#324DC7" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/><circle cx="67.8" cy="139.8" r="4.2" fill="#324DC7"/><circle cx="229.8" cy="37.8" r="4.2" fill="#324DC7"/><g font-size="11" font-family="Georgia,serif" fill="#1e1e1e" stroke="#ffffff" stroke-width="4.5" stroke-linejoin="round" paint-order="stroke fill"><text x="40.8" y="115.8" text-anchor="middle">−2</text><text x="67.8" y="115.8" text-anchor="middle">−1</text><text x="121.8" y="115.8" text-anchor="middle">1</text><text x="148.8" y="115.8" text-anchor="middle">2</text><text x="175.8" y="115.8" text-anchor="middle">3</text><text x="202.8" y="115.8" text-anchor="middle">4</text><text x="229.8" y="115.8" text-anchor="middle">5</text><text x="87.8" y="177.8" text-anchor="end">−3</text><text x="87.8" y="75.8" text-anchor="end">3</text><text x="87.8" y="41.8" text-anchor="end">5</text><text x="265.6" y="114.8" text-anchor="end" font-size="12" font-style="italic">x</text><text x="103.8" y="25" font-size="12" font-style="italic">y</text><text x="265.6" y="218" text-anchor="end" font-size="12">y = f(x)</text></g></svg>';

  window.SAT_SETS.push({
    id: 'math-nonlin-fn1',
    title: 'Nonlinear Functions on the Graph',
    section: 'math',
    level: 'Fácil',
    description: 'Parabolas read off a picture: vertex, axis of symmetry and intercepts from all three ways of writing the same curve, translations and reflections, domain and range, the maximum of a model in context, and the zeros of a graph. Built to start easy.',
    minutes: 17,
    questions: [
      {
        id:'NFN-01', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Parabola in vertex form: reading the vertex',
        stem:'The function f is defined by f(x) = 2(x + 5)² − 3. In the xy-plane, the graph of y = f(x) is a parabola. What are the coordinates of the vertex of this parabola?',
        choices:{A:'(5, −3)', B:'(−5, −3)', C:'(−5, 3)', D:'(−3, −5)'},
        correct:'B',
        expCorrect:'In the form a(x − h)² + k the vertex is (h, k), and the subtraction inside the parentheses is part of the form. Match it up: 2(x + 5)² − 3 is 2(x − (−5))² + (−3), so h = −5 and k = −3, and the vertex is (−5, −3). The a = 2 makes the parabola narrower but never moves the vertex. (Check: f(−5) = 2(0)² − 3 = −3 ✓, and every other input gives something larger, since 2(x + 5)² is never negative.)',
        expWrong:{
          A:'(5, −3) copies the 5 straight out of (x + 5). The form subtracts h, so a "+ 5" inside means h = −5. Flip the sign of whatever is inside the parentheses, never the sign of the number outside.',
          C:'(−5, 3) flips the sign of the −3 as well. Only the number INSIDE the parentheses gets its sign flipped; the k that sits outside is already the y-coordinate as written.',
          D:'(−3, −5) has the two numbers in the wrong order. The x-coordinate comes from inside the parentheses and the y-coordinate from the constant outside, not the other way around.'
        },
        tip:'Read a(x − h)² + k as a machine with two switches: the number inside flips its sign and becomes the x of the vertex, the number outside keeps its sign and becomes the y. The a in front changes only the width and which way the curve opens.',
        desmos:'Graph y=2(x+5)^2-3. Desmos marks the turning point for you: click the curve at its lowest spot and it reads (-5, -3).',
        desmosLatex:['y=2(x+5)^2-3','(-5,-3)']
      },
      {
        id:'NFN-02', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Axis of symmetry read from the graph of a parabola',
        figure: FIG_UP,
        stem:'The graph of y = f(x) is shown in the xy-plane. What is the equation of the axis of symmetry of this graph?',
        choices:{A:'x = −4', B:'y = −4', C:'x = 5', D:'x = 3'},
        correct:'D',
        expCorrect:'The axis of symmetry is the vertical line through the lowest point, so it is the mirror line that folds the left half of the curve exactly onto the right half. The lowest point of the graph is (3, −4), so the line is x = 3. Two ways to confirm it from the picture: the curve crosses the x-axis at 1 and at 5, and the midpoint of those is (1 + 5)/2 = 3; and it passes through (0, 5) and (6, 5), whose midpoint is also 3 ✓.',
        expWrong:{
          A:'x = −4 uses the y-coordinate of the lowest point as if it were an x-value. The point is (3, −4): the 3 is how far across, the −4 is how far down.',
          B:'y = −4 is a horizontal line — it is the height of the lowest point, not the mirror line. A line that folds a left half onto a right half has to be vertical, so its equation starts with x =.',
          C:'x = 5 is one of the two places where the curve meets the x-axis. The axis of symmetry sits halfway BETWEEN the two crossings, at (1 + 5)/2 = 3.'
        },
        tip:'Axis of symmetry = the vertical line through the turning point, and its equation always looks like x = a number. If the graph shows two x-intercepts, averaging them gets you there without any algebra.',
        desmos:'Graph y=(x-3)^2-4 (the curve shown) together with x=3. The vertical line splits the curve into two mirror halves; try x=5 and it clearly does not.',
        desmosLatex:['y=(x-3)^2-4','x=3']
      },
      {
        id:'NFN-03', type:'mc', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Vertical translation: f(x) + k moves the output',
        stem:'In the xy-plane, the graph of y = f(x) passes through the point (4, 9). The function g is defined by g(x) = f(x) + 7. Which point must lie on the graph of y = g(x)?',
        choices:{A:'(4, 16)', B:'(11, 9)', C:'(4, 2)', D:'(−3, 9)'},
        correct:'A',
        expCorrect:'Adding 7 happens AFTER f has done its job, so it changes the output and leaves the input alone: g(4) = f(4) + 7 = 9 + 7 = 16. The point is (4, 16). In picture terms, the whole graph slides 7 units straight up, so every point keeps its x and gains 7 on its y.',
        expWrong:{
          B:'(11, 9) adds the 7 to the x-coordinate. That would be the effect of writing it inside, as f(x + 7); a "+ 7" written outside f changes the height, not the horizontal position.',
          C:'(4, 2) subtracts 7 from the height. Adding a positive number raises the graph; 9 + 7 = 16, not 9 − 7.',
          D:'(−3, 9) slides the point 7 units LEFT, the move that f(x + 7) would make. Nothing here touches the input, so the x-coordinate stays 4.'
        },
        tip:'Outside the function changes the output (up and down, and it does what it says). Inside the function changes the input (left and right, and it does the OPPOSITE of what it says). Deciding outside-or-inside first answers half of every transformation question.',
        desmos:'Pick any curve through (4, 9) — say y=x^2-7 — and graph y=x^2-7+7 beside it. The second is the first raised 7, and the point (4, 9) has become (4, 16).',
        desmosLatex:['y=x^2-7','y=x^2-7+7','(4,16)']
      },
      {
        id:'NFN-04', type:'spr', domain:'Advanced Math', difficulty:'Fácil',
        skill:'Reading the zeros of a function off its graph',
        figure: FIG_ZEROS,
        stem:'In the xy-plane, the graph of y = f(x) is shown. What is the sum of all values of x for which f(x) = 0?',
        answer:'2',
        expCorrect:'f(x) = 0 means the height is zero, and height zero is exactly the x-axis. So the values asked for are the x-coordinates of the points where the curve MEETS the x-axis: x = −3, x = 1 and x = 4. Their sum is −3 + 1 + 4 = 2. (Two things to be careful with: do not read the y-intercept 2 as a zero — it is where the curve crosses the other axis; and the two turning points are not zeros either, because the curve does not touch the x-axis there.)',
        tip:'"f(x) = 0", "zero of f", "x-intercept" and "the graph crosses the x-axis" are four names for the same place on the picture. Whenever a question gives you one of them, look for horizontal crossings — and count them all, since a curve can have more than two.',
        desmos:'Graph y=(x+3)(x-1)(x-4)/6, the curve shown. Desmos dots every x-axis crossing: click them to read (-3, 0), (1, 0) and (4, 0).',
        desmosLatex:['y=(x+3)(x-1)(x-4)/6']
      },
      {
        id:'NFN-05', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Parabola written as a product: the least value of the function',
        stem:'The function h is defined by h(x) = (x + 3)(x − 7). In the xy-plane, the graph of y = h(x) is a parabola that opens upward. What is the minimum value of h?',
        choices:{A:'2', B:'−21', C:'25', D:'−25'},
        correct:'D',
        expCorrect:'Written as a product, the equation hands you the x-intercepts for free: h(x) = 0 when x = −3 or x = 7. The lowest point sits halfway between them, at x = (−3 + 7)/2 = 2. Now substitute to get the VALUE: h(2) = (2 + 3)(2 − 7) = (5)(−5) = −25. (Check: h(1) = (4)(−6) = −24 and h(3) = (6)(−4) = −24, both above −25 ✓.)',
        expWrong:{
          A:'2 is where the minimum happens, not what the minimum is. It is the x-coordinate of the lowest point; the question asks for the height there, so substitute x = 2 back into h.',
          B:'−21 is h(0) = (3)(−7), the y-intercept. That is the height above x = 0, but the lowest point of this parabola is at x = 2, not at x = 0.',
          C:'25 is (5)(−5) with the minus sign dropped. One factor is positive and the other negative, so the product is negative: −25. A parabola opening upward with x-intercepts on both sides of the axis has to dip BELOW the x-axis.'
        },
        tip:'Each form shows you one thing for free: the product form shows the x-intercepts, the standard form shows the y-intercept, the vertex form shows the turning point. From the product form, average the two intercepts to land on the axis of symmetry, then substitute to turn "where" into "how much".',
        desmos:'Graph y=(x+3)(x-7) and click the bottom of the curve: Desmos labels it (2, -25). The x-axis crossings read (-3, 0) and (7, 0).',
        desmosLatex:['y=(x+3)(x-7)','(2,-25)']
      },
      {
        id:'NFN-06', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Choosing the form of a parabola that displays the minimum value',
        stem:'The function f is defined by f(x) = x² − 10x + 9. Which of the following shows the minimum value of f as a number that appears in the expression?',
        choices:{A:'f(x) = (x − 1)(x − 9)', B:'f(x) = (x − 5)² − 16', C:'f(x) = (x − 5)² + 9', D:'f(x) = x(x − 10) + 9'},
        correct:'B',
        expCorrect:'Only the vertex form a(x − h)² + k puts the turning point in plain sight, and (x − 5)² − 16 is genuinely f rewritten: (x − 5)² − 16 = x² − 10x + 25 − 16 = x² − 10x + 9 ✓. Its vertex is (5, −16), so the minimum value of f is the −16 you can read off the end. (Check: f(5) = 25 − 50 + 9 = −16 ✓.)',
        expWrong:{
          A:'This one is equal to f, but the numbers it displays are the x-intercepts, 1 and 9 — WHERE the curve meets the x-axis, not how low it goes. You would still have to average them and substitute.',
          C:'This is the trap of completing the square without balancing: (x − 5)² already contains +25, so you have to subtract it back. As written it is not even the same function — at x = 0 it gives 34, while f(0) = 9.',
          D:'This one is equal to f as well, but the 9 it shows is f(0), the y-intercept. The minimum of f is −16, and this form never displays it.'
        },
        tip:'When a question asks which form "displays" or "shows" something, do not solve anything — ask what each form gives away. Vertex form → the turning point. Product of two binomials → the x-intercepts. Standard form → the y-intercept. Then check that the choice really is the same function before you trust it.',
        desmos:'Graph all four at once: y=x^2-10x+9, y=(x-5)^2-16, y=(x-1)(x-9) and y=(x-5)^2+9. Three curves land exactly on top of each other; the fourth sits 25 higher, which is the one that forgot to balance.',
        desmosLatex:['y=x^2-10x+9','y=(x-5)^2-16','y=(x-1)(x-9)','y=(x-5)^2+9']
      },
      {
        id:'NFN-07', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Horizontal translation: reading f(x + 3) off the picture of f',
        figure: FIG_DOWN,
        stem:'The graph of y = f(x) is shown in the xy-plane. The function g is defined by g(x) = f(x + 3). What is the value of g(−2)?',
        choices:{A:'4', B:'1', C:'−2', D:'−5'},
        correct:'A',
        expCorrect:'Do not shift the picture — feed the input through. g(−2) = f(−2 + 3) = f(1), so read the graph at x = 1: the highest point is (1, 4), so f(1) = 4 and g(−2) = 4. (If you would rather think in pictures: the + 3 is inside, so the graph of g is the graph of f slid 3 units LEFT, which puts the peak that was at x = 1 over x = −2 — and its height is still 4 ✓.)',
        expWrong:{
          B:'1 comes from doing the shift twice: f(1) = 4 and then subtracting 3 as well. The + 3 acts once, on the input only.',
          C:'−2 is f(−2) + 3 = −5 + 3, which treats the + 3 as if it were written outside the function. Outside would raise the graph; inside moves it sideways.',
          D:'−5 is f(−2), the height of the graph shown at x = −2. That ignores the + 3 entirely; the input that reaches f is −2 + 3 = 1.'
        },
        tip:'For f(input), do the arithmetic inside the parentheses FIRST, then look that number up on the graph. It beats trying to picture the shift, and it never tricks you about which direction the curve moved.',
        desmos:'Graph y=-(x-1)^2+4, the curve shown, and then y=-((x+3)-1)^2+4. The second is the first slid 3 units left, and at x=-2 it reads 4.',
        desmosLatex:['y=-(x-1)^2+4','y=-((x+3)-1)^2+4','(-2,4)']
      },
      {
        id:'NFN-08', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Domain and range read from the graph of a nonlinear function',
        figure: FIG_RANGE,
        stem:'The complete graph of the function f is shown in the xy-plane. Which of the following describes the range of f?',
        choices:{A:'y ≥ −3', B:'1 ≤ y ≤ 5', C:'−3 ≤ y ≤ 5', D:'−1 ≤ x ≤ 5'},
        correct:'C',
        expCorrect:'The range is the set of HEIGHTS the graph actually reaches, so sweep your eye from the bottom of the curve to the top. The lowest point is (1, −3), so the smallest output is −3. The highest point is the right endpoint (5, 5), so the largest output is 5. Both ends are solid dots, so both are included: −3 ≤ y ≤ 5. (Sanity check on a middle value: at x = 3 the graph is at −1, which is inside that interval ✓.)',
        expWrong:{
          A:'y ≥ −3 gets the bottom right but forgets that the graph STOPS. The word "complete" plus the solid dots at both ends mean nothing exists past x = 5, so the outputs never climb above 5.',
          B:'1 ≤ y ≤ 5 uses the x-coordinate of the lowest point (which is 1) as the bottom of the range. The range is built only from y-coordinates, and the lowest point (1, −3) contributes its −3.',
          D:'−1 ≤ x ≤ 5 is the DOMAIN — how far the graph stretches left to right. Range is how far it stretches up and down, so the answer has to be written in y.'
        },
        tip:'Domain = squash the graph onto the x-axis (how wide). Range = squash it onto the y-axis (how tall). Before you pick, check the ends: a solid dot includes that value, an arrow means it keeps going forever.',
        desmos:'Graph y=0.5(x-1)^2-3 and then type the restriction in braces right after it: {-1 ≤ x ≤ 5}. Desmos draws only the piece shown, and you can trace it from the bottom (1, -3) up to the endpoint (5, 5).',
        desmosLatex:['y=0.5(x-1)^2-3\\left\\{-1\\le x\\le5\\right\\}','(1,-3)','(5,5)']
      },
      {
        id:'NFN-09', type:'mc', domain:'Advanced Math', difficulty:'Media',
        skill:'Maximum of a model in context: the height, not the second it happens',
        stem:'A model rocket is launched from the roof of a shed. Its height above the ground is modeled by h(t) = −5t² + 30t + 8, where h(t) is the height in meters t seconds after the launch. What is the greatest height, in meters, that the rocket reaches?',
        choices:{A:'8', B:'45', C:'53', D:'3'},
        correct:'C',
        expCorrect:'The graph of h is a parabola opening downward, so the greatest height is at its vertex. The vertex is at t = −b/(2a) = −30/(2 · (−5)) = −30/(−10) = 3 seconds. That is WHEN; now substitute to get HOW HIGH: h(3) = −5(9) + 30(3) + 8 = −45 + 90 + 8 = 53 meters. (Check the symmetry: h(2) = −20 + 60 + 8 = 48 and h(4) = −80 + 120 + 8 = 48 — equal heights on either side of t = 3, exactly as a parabola should ✓.)',
        expWrong:{
          A:'8 is h(0), the height of the roof the rocket left from. It is where the model starts, not where it tops out.',
          B:'45 evaluates −5t² + 30t at t = 3 and forgets the + 8. The constant term is part of the model at every instant, including at the top.',
          D:'3 is the number of SECONDS at which the greatest height happens, not the height itself. It is the halfway step: read the question again and substitute it back.'
        },
        tip:'Every "what is the maximum" question has two answers hiding in it — WHEN (the input, t = −b/(2a)) and HOW MUCH (the output, h at that input). Find the input first, then substitute, then re-read which one the question actually named.',
        desmos:'Graph y=-5x^2+30x+8 and click the top of the arc: Desmos labels it (3, 53). The 3 is the second, the 53 is the height.',
        desmosLatex:['y=-5x^2+30x+8','(3,53)']
      },
      {
        id:'NFN-10', type:'spr', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Vertex of a parabola recovered from its two x-intercepts and one more point',
        stem:'In the xy-plane, the graph of y = f(x) is a parabola with x-intercepts at (−7, 0) and (3, 0), and the graph passes through the point (1, −32). What is the y-coordinate of the vertex of the graph?',
        answer:'-50',
        expCorrect:'Start from the form that already knows the intercepts: f(x) = a(x + 7)(x − 3), which is zero at x = −7 and x = 3 for any a. Use the third point to pin down a: f(1) = a(1 + 7)(1 − 3) = a(8)(−2) = −16a, and that has to equal −32, so a = 2. The axis of symmetry is halfway between the intercepts, at x = (−7 + 3)/2 = −2. Finally substitute: f(−2) = 2(−2 + 7)(−2 − 3) = 2(5)(−5) = −50. (Check: f(1) = 2(8)(−2) = −32 ✓, f(−7) = 0 ✓, f(3) = 0 ✓.)',
        tip:'Two x-intercepts plus one extra point determine a parabola completely: write a(x − r)(x − s), plug the extra point in to find a, then average r and s for the axis and substitute. Three answers are lying around at the end — the axis −2, the stretch a = 2, and the given −32 — so finish by re-reading which one was asked for.',
        desmos:'Type y=a(x+7)(x-3) and add a slider for a, then drag it until the curve hits (1, -32): it lands on a = 2. Click the bottom of that curve and Desmos reads (-2, -50).',
        desmosLatex:['y=a(x+7)(x-3)','a=2','(1,-32)','(-2,-50)']
      },
      {
        id:'NFN-11', type:'mc', domain:'Advanced Math', difficulty:'Difícil',
        skill:'Reflections: −f(x), f(−x) and what happens when you do both',
        stem:'In the xy-plane, the graph of y = f(x) passes through the point (−6, 2). The function g is defined by g(x) = −f(−x). Which point must lie on the graph of y = g(x)?',
        choices:{A:'(−6, 2)', B:'(6, −2)', C:'(6, 2)', D:'(−6, −2)'},
        correct:'B',
        expCorrect:'Work the definition instead of picturing it. You want an input that makes f receive the −6 you know about, so try x = 6: g(6) = −f(−6) = −(2) = −2. That gives the point (6, −2). The two minus signs do different jobs — the inside one flips the graph across the y-axis, the outside one flips it across the x-axis — and together they turn the whole graph 180° about the origin, sending (−6, 2) to (6, −2).',
        expWrong:{
          A:'(−6, 2) is the original point, chosen on the idea that two reflections cancel. They only cancel when they are across the SAME line; these are across the two different axes, so what is left is a half-turn, and no point survives it except one sitting at the origin.',
          C:'(6, 2) applies only the minus inside, which is the graph of y = f(−x). The minus in front of f still has to negate the output: 2 becomes −2.',
          D:'(−6, −2) applies only the minus in front, which is the graph of y = −f(x). The minus on the input still has to flip the x-coordinate: −6 becomes 6.'
        },
        tip:'Never guess a reflection — substitute. Ask "what input makes the inside of f equal the number I already know?", use it, then apply whatever is outside. Inside minus → left-right flip (x changes sign). Outside minus → up-down flip (y changes sign).',
        desmos:'Take any curve through (-6, 2), for example y=(x+6)^2+2, and graph y=-((6-x)^2+2) beside it. The second is the first turned half a turn about the origin, and it passes through (6, -2).',
        desmosLatex:['y=(x+6)^2+2','y=-((6-x)^2+2)','(6,-2)']
      }
    ]
  });
})();
