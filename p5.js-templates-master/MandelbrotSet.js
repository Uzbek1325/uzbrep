let minval = -0.5;
let maxval = 0.5;

let minSlider, maxSlider;

function setup(){
    createCanvas(720, 480);
    pixelDensity(1);

    minSlider = createSlider(-2.5, 0, -2.5, 0.01);
    maxSlider = createSlider(0, 2.5, 0, 0.01);

};

function draw(){   
    let maxiterations = 50; 

    loadPixels();
    for (let x = 0; x < width; x++){
        for (let y = 0; y < height; y++){

            let a = map(x, 0, width, minSlider.value(), maxSlider.value());
            let b = map(y, 0, height, minSlider.value(), maxSlider.value());
            let aOld = a;
            let bOld = b;

            let n = 0;
            let z = 0;

            while (n < maxiterations){
                let real_component = a*a - b*b;
                let complex_component = 2 * a* b;

                a = real_component + aOld;
                b = complex_component + bOld;

                if (a + b > 16){
                    break;
                }
                n ++;
            }
           
            let bright = map(n, 0, maxiterations, 0, 255);

            if (n === maxiterations){
                bright = 0;
            }

            let pix = (x + y * width) * 4;
            pixels[pix + 0] = bright; //r
            pixels[pix + 1] = bright; //g
            pixels[pix + 2] = bright; //b
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();
};



