function merge(nums1, m, nums2, n) {

    var first = m - 1;
    var second = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {
        if (second < 0) {
            break;
        }

        if (nums1[first] > nums2[second]) {
            nums1[i] = nums1[first];
            first--;
        } else {
            nums1[i] = nums2[second];
            second--;
        }
    }

    return nums1;
}

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));