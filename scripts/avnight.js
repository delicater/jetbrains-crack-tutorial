// ==UserScript==
// @name         avnigth_activation
// @version      2024-12-30
// @match        https://g8yd0.sonkwl.com/*
// @namespace    pwa.gfwboom.com
// @description  爱威奶各种任务奖励领取
// @author       delicater
// @license      MIT
// @icon         https://g.baozumw.com/pwa_av9/img/icons/favicon-32x32.png
// @run-at       document-start
// ==/UserScript==

(function() {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('访问令牌未找到，请先登录！');
        return;
    }

    const baseUrl = "https://api.pk2276.com/vw3/202406/mission/";
    const headers = {"Content-Type": "application/json", "Access-Token": `Bearer ${token}`};

    function fetchData(url) {
        return fetch(url, {
            method: 'GET',
            headers: headers
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }).catch(error => {
            console.error(`Error fetching data: ${error}`);
            alert(`Error fetching data: ${error}`);
        });
    }

    function fetchMission(missionType, start, end) {
        for (let i = start; i < end; i++) {
            fetchData(`${baseUrl}${missionType}/${i}`).then(data => {
                console.log(`任务${missionType}${i}领取成功:`, data);
                alert(`任务${missionType}${i}领取成功`);
            });
        }
    }

    fetchMission('daily', 4, 10);
    fetchMission('vip',1,7);
})();
