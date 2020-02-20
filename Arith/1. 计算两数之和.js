// JavaScript 2020/2/18

// 我的算法 136 ms 34 MB

var twoSum = function(nums, target) {
    var i=0,j=0;
    for(i=0;i<nums.length;i++){
        var num1 = nums[i];
        for(j=i+1;j<nums.length;j++){
            var num2 = nums[j];
            if(num2+num1==target)return[i,j];
        }
    }
};

// 别人的算法 44 ms

var twoSum = function(nums, target) {
     var temp = [];
    for(var i=0;i<nums.length;i++){
        var dif = target - nums[i];
        if(temp[dif] != undefined){
            return [temp[dif],i];
        }
        temp[nums[i]] = i;
    }
};

