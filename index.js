const Num = document.querySelectorAll(".Num");
const Result = document.querySelector(".result");

const Sign = document.querySelectorAll(".Sign");
const Equal = document.querySelector(".equal");
const AC = document.querySelector(".reset");
const Percent = document.querySelector(".percent");
const ChangeValue = document.querySelector(".changeValue");

var ArrayValue1 = [];
var ArraySign = [];
// xử lí phần trăm
const PercentNum = (value) => {
  Percent.onclick = () => {
    const percent = value / 100;
    OutputValue(percent);
  };
};
// xử lí biến đổi số
const changeValue = (value) => {
  ChangeValue.onclick = () => {
    const newValue = -value;
    OutputValue(newValue);
  };
};
// xử lí con số
Num.forEach((e) => {
  e.addEventListener("click", () => {
    const FirstValue = e.value;
    GetValue(FirstValue);
  });
});
const GetValue = (value) => {
  ArrayValue1.push(value);
  const newArray = ArrayValue1;
  HandleEqual(newArray);
  HandleArray(newArray);
};
const HandleArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == undefined) {
      HandleValue1(array, i);
      break;
    } else {
      HandleValue2(array);
    }
  }
};
const HandleValue1 = (array, index) => {
  var start = index;
  const Num = array.join("");
  const num = Number(Num);
  OutputValue(num);

  HandleValue2(array, start);
};
const HandleValue2 = (array, start) => {
  const Value2 = array.slice(start + 1);
  const Num = Value2.join("");
  OutputValue(Num);
};
const OutputValue = (value) => {
  const CheckValue = Number(value);
  if (CheckValue && CheckValue < 10000000) {
    PercentNum(value);
    changeValue(value);
    Result.innerHTML = value;
  } else if (!CheckValue) {
    Result.innerHTML = value;
  }
};
// xử lí dấu
Sign.forEach((e) => {
  e.addEventListener("click", () => {
    OutputValue(e.value);
    ArraySign.push(e.value);
    handleSign();
  });
});
var handleSign = (sign) => {
  ArrayValue1.push(sign);
};
var HandleEqual = (array) => {
  // xử lí dấu bằng
  Equal.onclick = () => {
    array.forEach((e, index) => {
      if (e == undefined) {
        GetValue1(array, index);
      }
    });
  };
};
const GetValue1 = (array, index) => {
  const Value1 = array.slice(0, index);
  if (Value1.length > 7) {
    var a1 = Value1.slice(0, 7);
  } else {
    a1 = Value1;
  }
  const Num = a1.join("");
  var num = Number(Num);
  GetValue2(array, index, num);
};
const GetValue2 = (array, i, vl1) => {
  if (i == undefined) {
    return [];
  } else {
    const Value2 = array.slice(i++);
    if (Value2.length > 8) {
      var a2 = Value2.slice(0, 8);
    } else {
      a2 = Value2;
    }
    const Num = a2.join("");
    var num = Number(Num);
    HandleMath(vl1, num);
    ResetValue();
  }
};
const HandleMath = (v1, v2) => {
  const Sign = String(ArraySign);
  var result;
  if (v1 < 10000000 && v2 < 10000000) {
    switch (Sign) {
      case "+":
        result = v1 + v2;
        break;
      case "-":
        result = v1 - v2;
        break;
      case "x":
        result = v1 * v2;
        break;
      case "÷":
        result = v1 / v2;
        break;
      default:
        break;
    }
    CheckResult(result);
  }
};
const CheckResult = (result) => {
  const g = result.toFixed(5);
  const d = parseFloat(g);
  OutputValue(d);
};
// xử lí reset
const ResetValue = () => {
  a = 50;
  ArrayValue1 = [];
  ArraySign = [];
};
AC.onclick = () => {
  ResetValue();
  OutputValue(0);
};
