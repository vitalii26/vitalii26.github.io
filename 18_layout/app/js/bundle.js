(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

document.querySelector('.cookie__button').addEventListener('click', function () {
  document.querySelector('.cookie').style.display = 'none';
});
document.querySelector('.hire__button').addEventListener('click', function () {
  document.querySelector('.modal').style.display = 'block';
});
document.querySelector('.modal__close').addEventListener('click', function () {
  document.querySelector('.modal').style.display = 'none';
});
document.querySelector('.hire__btn').addEventListener('click', function () {
  document.querySelector('.modal').style.display = 'block';
});
document.querySelector('.home__burger').addEventListener('click', function () {
  document.querySelector('.menu').style.display = 'block';
});
document.querySelector('.menu__close').addEventListener('click', function () {
  document.querySelector('.menu').style.display = 'none';
}); // const selectElement = (element) => document.querySelector(element);
// selectElement('.home__menu-icons').addEventListener('click', () => {
// 	selectElement('.home__menu').classList.toggle('active');
// });

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy8xOF9sYXlvdXQvc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQTBDLGdCQUExQyxDQUEyRCxPQUEzRCxFQUNDLFlBQVk7QUFDWixFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLENBQXdDLE9BQXhDLEdBQWlELE1BQWpEO0FBQ0EsQ0FIRDtBQUlBLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLEVBQXdDLGdCQUF4QyxDQUF5RCxPQUF6RCxFQUNDLFlBQVk7QUFDWixFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLEVBQWlDLEtBQWpDLENBQXVDLE9BQXZDLEdBQWdELE9BQWhEO0FBQ0EsQ0FIRDtBQUlBLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLEVBQXdDLGdCQUF4QyxDQUF5RCxPQUF6RCxFQUNDLFlBQVk7QUFDWixFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLEVBQWlDLEtBQWpDLENBQXVDLE9BQXZDLEdBQWdELE1BQWhEO0FBQ0EsQ0FIRDtBQUlBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFlBQXZCLEVBQXFDLGdCQUFyQyxDQUFzRCxPQUF0RCxFQUNDLFlBQVk7QUFDWixFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLEVBQWlDLEtBQWpDLENBQXVDLE9BQXZDLEdBQWdELE9BQWhEO0FBQ0EsQ0FIRDtBQUlBLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLEVBQXdDLGdCQUF4QyxDQUF5RCxPQUF6RCxFQUNDLFlBQVk7QUFDWixFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLEtBQWhDLENBQXNDLE9BQXRDLEdBQStDLE9BQS9DO0FBQ0EsQ0FIRDtBQUlBLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDLGdCQUF2QyxDQUF3RCxPQUF4RCxFQUNDLFlBQVk7QUFDWixFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLEtBQWhDLENBQXNDLE9BQXRDLEdBQStDLE1BQS9DO0FBQ0EsQ0FIRCxFLENBS0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29raWVfX2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcclxuIGZ1bmN0aW9uICgpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29va2llJykuc3R5bGUuZGlzcGxheSA9J25vbmUnO1xyXG59KTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpcmVfX2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcclxuIGZ1bmN0aW9uICgpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0nYmxvY2snO1xyXG59KTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcclxuIGZ1bmN0aW9uICgpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0nbm9uZSc7XHJcbn0pO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlyZV9fYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxyXG4gZnVuY3Rpb24gKCkge1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSdibG9jayc7XHJcbn0pO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fYnVyZ2VyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxyXG4gZnVuY3Rpb24gKCkge1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jykuc3R5bGUuZGlzcGxheSA9J2Jsb2NrJztcclxufSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcclxuIGZ1bmN0aW9uICgpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpLnN0eWxlLmRpc3BsYXkgPSdub25lJztcclxufSk7XHJcblxyXG4vLyBjb25zdCBzZWxlY3RFbGVtZW50ID0gKGVsZW1lbnQpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XHJcbi8vIHNlbGVjdEVsZW1lbnQoJy5ob21lX19tZW51LWljb25zJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbi8vIFx0c2VsZWN0RWxlbWVudCgnLmhvbWVfX21lbnUnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuLy8gfSk7Il0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p3Y205cVpXTjBjeTh4T0Y5c1lYbHZkWFF2YzNKakwycHpMMkZ3Y0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3TzBGRFFVRXNVVUZCVVN4RFFVRkRMR0ZCUVZRc1EwRkJkVUlzYVVKQlFYWkNMRVZCUVRCRExHZENRVUV4UXl4RFFVRXlSQ3hQUVVFelJDeEZRVU5ETEZsQlFWazdRVUZEV2l4RlFVRkJMRkZCUVZFc1EwRkJReXhoUVVGVUxFTkJRWFZDTEZOQlFYWkNMRVZCUVd0RExFdEJRV3hETEVOQlFYZERMRTlCUVhoRExFZEJRV2xFTEUxQlFXcEVPMEZCUTBFc1EwRklSRHRCUVVsQkxGRkJRVkVzUTBGQlF5eGhRVUZVTEVOQlFYVkNMR1ZCUVhaQ0xFVkJRWGRETEdkQ1FVRjRReXhEUVVGNVJDeFBRVUY2UkN4RlFVTkRMRmxCUVZrN1FVRkRXaXhGUVVGQkxGRkJRVkVzUTBGQlF5eGhRVUZVTEVOQlFYVkNMRkZCUVhaQ0xFVkJRV2xETEV0QlFXcERMRU5CUVhWRExFOUJRWFpETEVkQlFXZEVMRTlCUVdoRU8wRkJRMEVzUTBGSVJEdEJRVWxCTEZGQlFWRXNRMEZCUXl4aFFVRlVMRU5CUVhWQ0xHVkJRWFpDTEVWQlFYZERMR2RDUVVGNFF5eERRVUY1UkN4UFFVRjZSQ3hGUVVORExGbEJRVms3UVVGRFdpeEZRVUZCTEZGQlFWRXNRMEZCUXl4aFFVRlVMRU5CUVhWQ0xGRkJRWFpDTEVWQlFXbERMRXRCUVdwRExFTkJRWFZETEU5QlFYWkRMRWRCUVdkRUxFMUJRV2hFTzBGQlEwRXNRMEZJUkR0QlFVbEJMRkZCUVZFc1EwRkJReXhoUVVGVUxFTkJRWFZDTEZsQlFYWkNMRVZCUVhGRExHZENRVUZ5UXl4RFFVRnpSQ3hQUVVGMFJDeEZRVU5ETEZsQlFWazdRVUZEV2l4RlFVRkJMRkZCUVZFc1EwRkJReXhoUVVGVUxFTkJRWFZDTEZGQlFYWkNMRVZCUVdsRExFdEJRV3BETEVOQlFYVkRMRTlCUVhaRExFZEJRV2RFTEU5QlFXaEVPMEZCUTBFc1EwRklSRHRCUVVsQkxGRkJRVkVzUTBGQlF5eGhRVUZVTEVOQlFYVkNMR1ZCUVhaQ0xFVkJRWGRETEdkQ1FVRjRReXhEUVVGNVJDeFBRVUY2UkN4RlFVTkRMRmxCUVZrN1FVRkRXaXhGUVVGQkxGRkJRVkVzUTBGQlF5eGhRVUZVTEVOQlFYVkNMRTlCUVhaQ0xFVkJRV2RETEV0QlFXaERMRU5CUVhORExFOUJRWFJETEVkQlFTdERMRTlCUVM5RE8wRkJRMEVzUTBGSVJEdEJRVWxCTEZGQlFWRXNRMEZCUXl4aFFVRlVMRU5CUVhWQ0xHTkJRWFpDTEVWQlFYVkRMR2RDUVVGMlF5eERRVUYzUkN4UFFVRjRSQ3hGUVVORExGbEJRVms3UVVGRFdpeEZRVUZCTEZGQlFWRXNRMEZCUXl4aFFVRlVMRU5CUVhWQ0xFOUJRWFpDTEVWQlFXZERMRXRCUVdoRExFTkJRWE5ETEU5QlFYUkRMRWRCUVN0RExFMUJRUzlETzBGQlEwRXNRMEZJUkN4RkxFTkJTMEU3UVVGRFFUdEJRVU5CTzBGQlEwRWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlncGUyWjFibU4wYVc5dUlISW9aU3h1TEhRcGUyWjFibU4wYVc5dUlHOG9hU3htS1h0cFppZ2hibHRwWFNsN2FXWW9JV1ZiYVYwcGUzWmhjaUJqUFZ3aVpuVnVZM1JwYjI1Y0lqMDlkSGx3Wlc5bUlISmxjWFZwY21VbUpuSmxjWFZwY21VN2FXWW9JV1ltSm1NcGNtVjBkWEp1SUdNb2FTd2hNQ2s3YVdZb2RTbHlaWFIxY200Z2RTaHBMQ0V3S1R0MllYSWdZVDF1WlhjZ1JYSnliM0lvWENKRFlXNXViM1FnWm1sdVpDQnRiMlIxYkdVZ0oxd2lLMmtyWENJblhDSXBPM1JvY205M0lHRXVZMjlrWlQxY0lrMVBSRlZNUlY5T1QxUmZSazlWVGtSY0lpeGhmWFpoY2lCd1BXNWJhVjA5ZTJWNGNHOXlkSE02ZTMxOU8yVmJhVjFiTUYwdVkyRnNiQ2h3TG1WNGNHOXlkSE1zWm5WdVkzUnBiMjRvY2lsN2RtRnlJRzQ5WlZ0cFhWc3hYVnR5WFR0eVpYUjFjbTRnYnlodWZIeHlLWDBzY0N4d0xtVjRjRzl5ZEhNc2NpeGxMRzRzZENsOWNtVjBkWEp1SUc1YmFWMHVaWGh3YjNKMGMzMW1iM0lvZG1GeUlIVTlYQ0ptZFc1amRHbHZibHdpUFQxMGVYQmxiMllnY21WeGRXbHlaU1ltY21WeGRXbHlaU3hwUFRBN2FUeDBMbXhsYm1kMGFEdHBLeXNwYnloMFcybGRLVHR5WlhSMWNtNGdiMzF5WlhSMWNtNGdjbjBwS0NraUxDSmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdVkyOXZhMmxsWDE5aWRYUjBiMjRuS1M1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzWEhKY2JpQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseDBaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtTnZiMnRwWlNjcExuTjBlV3hsTG1ScGMzQnNZWGtnUFNkdWIyNWxKenRjY2x4dWZTazdYSEpjYm1SdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTVvYVhKbFgxOWlkWFIwYjI0bktTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc1hISmNiaUJtZFc1amRHbHZiaUFvS1NCN1hISmNibHgwWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbTF2WkdGc0p5a3VjM1I1YkdVdVpHbHpjR3hoZVNBOUoySnNiMk5ySnp0Y2NseHVmU2s3WEhKY2JtUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1dGIyUmhiRjlmWTJ4dmMyVW5LUzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NYSEpjYmlCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4MFpHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG0xdlpHRnNKeWt1YzNSNWJHVXVaR2x6Y0d4aGVTQTlKMjV2Ym1Vbk8xeHlYRzU5S1R0Y2NseHVaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtaHBjbVZmWDJKMGJpY3BMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5eGNjbHh1SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhSa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1Ylc5a1lXd25LUzV6ZEhsc1pTNWthWE53YkdGNUlEMG5ZbXh2WTJzbk8xeHlYRzU5S1R0Y2NseHVaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtaHZiV1ZmWDJKMWNtZGxjaWNwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXhjY2x4dUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhIUmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWJXVnVkU2NwTG5OMGVXeGxMbVJwYzNCc1lYa2dQU2RpYkc5amF5YzdYSEpjYm4wcE8xeHlYRzVrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3ViV1Z1ZFY5ZlkyeHZjMlVuS1M1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzWEhKY2JpQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseDBaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtMWxiblVuS1M1emRIbHNaUzVrYVhOd2JHRjVJRDBuYm05dVpTYzdYSEpjYm4wcE8xeHlYRzVjY2x4dUx5OGdZMjl1YzNRZ2MyVnNaV04wUld4bGJXVnVkQ0E5SUNobGJHVnRaVzUwS1NBOVBpQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0dWc1pXMWxiblFwTzF4eVhHNHZMeUJ6Wld4bFkzUkZiR1Z0Wlc1MEtDY3VhRzl0WlY5ZmJXVnVkUzFwWTI5dWN5Y3BMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dLQ2tnUFQ0Z2UxeHlYRzR2THlCY2RITmxiR1ZqZEVWc1pXMWxiblFvSnk1b2IyMWxYMTl0Wlc1MUp5a3VZMnhoYzNOTWFYTjBMblJ2WjJkc1pTZ25ZV04wYVhabEp5azdYSEpjYmk4dklIMHBPeUpkZlE9PSJ9
