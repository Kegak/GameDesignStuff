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

  function particles(ctx, x_coord, y_coord, dir_string, shape_string, color="black", increase=0){
    switch(shape_string == "circle"){
      case(dir_string == "up"):{
        ctx.strokeStyle = color
        ctx.beginPath()
      }
      case(dir_string == "down"):{
        ctx.strokeStyle = color
        ctx.beginPath()
      }
      case(dir_string == "right"):{
        ctx.strokeStyle = color
        ctx.beginPath()
      }
      case(dir_string == "left"):{
        ctx.strokeStyle = color
        ctx.beginPath()
      }
    }
    switch(shape_string == "rectangle"){
      case(dir_string == "up"):{
        ctx.strokeStyle = color
        ctx.beginPath()
        ctx.moveTo(x_coord, y_coord)
        ctx.lineTo(x_coord, y_coord - increase)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(x_coord - 5, y_coord + 2)
        ctx.lineTo(x_coord - 10, y_coord - increase + 5)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(x_coord + 5, y_coord + 2)
        ctx.lineTo(x_coord + 10, y_coord - increase + 5)
        ctx.stroke()
        
      }
      case(dir_string == "down"):{
        ctx.strokeStyle = color
        ctx.beginPath()
        ctx.moveTo(x_coord, y_coord)
        ctx.lineTo(x_coord, y_coord + increase)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(x_coord - 5, y_coord - 2)
        ctx.lineTo(x_coord - 10, y_coord + increase - 5)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(x_coord + 5, y_coord - 2)
        ctx.lineTo(x_coord + 10, y_coord + increase - 5)
        ctx.stroke()
      }
      case(dir_string == "right"):{
        ctx.strokeStyle = color
        ctx.beginPath()
      }
      case(dir_string == "left"):{
        ctx.strokeStyle = color
        ctx.beginPath()
        ctx.moveTo(x_coord, y_coord)
        ctx.lineTo(y_coord + 5, y_coord)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(x_coord - 2, y_coord - 5)
        ctx.lineTo(x_coord + increase - 5, y_coord - 10)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(x_coord - 2, y_coord + 5)
        ctx.lineTo(x_coord  + increase - 5, y_coord + 10)
        ctx.stroke()
      }
    }
  
  }