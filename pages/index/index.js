Page({
    data: {
        second: 59,
        minute: 24
    },
    onLoad() {
    },
    toSetting() {
        wx.navigateTo({
            url: '/pages/settings/settings'
        })
    },
    setTime(){
        setTime(this);
    }
});

function setTime(that) {
    let second = that.data.second;
    let minute = that.data.minute;

    if (second === 0) {
        if (minute === 0) {
            that.setData({
                second: "Time Out..."
            });
            return;
        } else {
            second = 59;
            minute = minute - 1;

            // 延时1s 分钟变化
            setTimeout(function () {
                that.setData({
                    minute: minute,
                });
            }, 1000);
        }
    }

    // -1s 递归
    setTimeout(function () {
        that.setData({
            second: second - 1,
        });
        setTime(that);
    }, 1000);
}