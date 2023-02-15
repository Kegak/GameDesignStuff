function Q_InvSqrt(num){
    //got from here: https://medium.com/@adrien.za/fast-inverse-square-root-in-go-and-javascript-for-fun-6b891e74e5a8
    //inspration from: https://en.wikipedia.org/wiki/Fast_inverse_square_root
    buffer = new ArrayBuffer(4)
    view = new DataView(buffer)
    var y, x2 = num * 0.5, threehalfs = 1.5
    view.setFloat32(0, num) //evil floating point bit level hacking
    view.setUint32(0, 0x5F375A86 - (view.getUint32(0) >> 1)) //what the duck?
    y = view.getFloat32(0)
    y *= (threehalfs - (x2 * y * y)) //1st iteration
    //y *= (threehalfs - (x2 * y * y)) //2nd iteration, this can be removed
    return y
  }

export {Q_InvSqrt}