<template>
    <div class="block datepicker">
        <span class="demonstration">Default</span>
        <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
        </el-date-picker>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: 'Today',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: 'Yesterday',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: 'A week ago',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                value1: '',
                value2: '',
            };
        }
    };
</script>

<style lang="scss">

    .datepicker{
        .demonstration{
            background: red;
        }
    }

</style>