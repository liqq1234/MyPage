<template>

    <div class="navbar">
               <kinesis-container>
                    <kinesis-element :strength="5">
                        <a class="nav-item" href="/">Home</a>
                    </kinesis-element>
               </kinesis-container>
                   <kinesis-container>
                    <kinesis-element :strength="5">
                    <a class="nav-item" href="/about">Aboutme</a>
                    </kinesis-element>
                   </kinesis-container>
    </div>

</template>

<script>
export default {
    // Vue.js script part
}
</script>

<style>
.navbar {
    background-color: rgba(255, 255, 255, 0.5);
    /* 半透明白色 */
    display: flex;
    justify-content: space-around;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.nav-item {
    color: #333;
    text-decoration: none;
    padding: 15px 15px;
    font-size: x-small;
}



.nav-dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #f1f1f1
}

.nav-dropdown:hover .dropdown-content {
    display: block;
}</style>
