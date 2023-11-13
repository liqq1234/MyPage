<!-- Footer.vue -->

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <p>&copy; 2023 Your Company. All rights reserved.</p>
                <ul class="social-links">
                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    // 组件的逻辑和属性
};
</script>

<style scoped>
/* 样式，可以根据需要进行自定义 */
.footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.social-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.social-links li {
    display: inline-block;
    margin-right: 10px;
}

.social-links a {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
}
</style>
