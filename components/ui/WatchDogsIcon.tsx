import React from "react";
type dimension = {
  width?: number;
  height?: number;
};
function WatchDogsIcon({ width, height }: dimension) {
  const defaultWidth = 243;
  const defaultHeight = 58;
  width = width || defaultWidth;
  height = height || defaultHeight;
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M39.3593 13.5422C35.422 10.2125 30.3502 8.53341 25.2038 8.85581C20.0575 9.1782 15.2348 11.4772 11.7439 15.2722C8.2529 19.0672 6.36377 24.0646 6.4713 29.22C6.57882 34.3753 8.67469 39.2896 12.3209 42.9358C15.967 46.5819 20.8813 48.6778 26.0367 48.7853C31.192 48.8929 36.1894 47.0037 39.9844 43.5128C43.7795 40.0218 46.0784 35.1992 46.4008 30.0528C46.7232 24.9064 45.0441 19.8346 41.7144 15.8973L33.5199 24.0917L29.6692 27.9425C29.8591 28.6508 29.8099 29.4019 29.5293 30.0795C29.2487 30.757 28.7524 31.323 28.1174 31.6896C27.4823 32.0563 26.744 32.2032 26.017 32.1075C25.29 32.0118 24.6148 31.6789 24.0963 31.1603C23.5778 30.6418 23.2448 29.9667 23.1491 29.2396C23.0534 28.5126 23.2003 27.7743 23.567 27.1392C23.9337 26.5042 24.4997 26.0079 25.1772 25.7273C25.8547 25.4467 26.6058 25.3975 27.3141 25.5874L29.8358 23.0658C28.439 22.2424 26.7898 21.9566 25.1974 22.2621C23.605 22.5676 22.1787 23.4433 21.1857 24.7251C20.1928 26.007 19.7014 27.6069 19.8036 29.2252C19.9059 30.8434 20.5948 32.3687 21.7412 33.5154C21.9003 33.669 22.0272 33.8528 22.1145 34.056C22.2018 34.2592 22.2477 34.4778 22.2497 34.6989C22.2516 34.9201 22.2094 35.1394 22.1257 35.3441C22.0419 35.5488 21.9183 35.7347 21.7619 35.8911C21.6055 36.0475 21.4195 36.1712 21.2149 36.2549C21.0102 36.3386 20.7909 36.3808 20.5697 36.3789C20.3486 36.3769 20.13 36.331 19.9268 36.2437C19.7236 36.1564 19.5398 36.0295 19.3862 35.8705C17.61 34.0994 16.5647 31.7252 16.4579 29.2192C16.3511 26.7132 17.1907 24.2587 18.8098 22.343C20.4289 20.4273 22.7092 19.1906 25.198 18.8783C27.6868 18.5661 30.2019 19.2011 32.2441 20.6574L34.6225 18.279C32.9474 16.9789 30.9861 16.0974 28.9017 15.7078C26.8174 15.3181 24.6701 15.4316 22.6384 16.0387C20.6067 16.6458 18.7493 17.729 17.2204 19.1984C15.6916 20.6677 14.5355 22.4807 13.8482 24.4868C13.161 26.4928 12.9624 28.6338 13.269 30.732C13.5757 32.8302 14.3786 34.8249 15.6112 36.5503C16.8438 38.2758 18.4704 39.6821 20.3558 40.6525C22.2412 41.6229 24.3309 42.1292 26.4514 42.1296C26.8931 42.1296 27.3168 42.305 27.6291 42.6174C27.9415 42.9297 28.1169 43.3534 28.1169 43.7951C28.1169 44.2368 27.9415 44.6605 27.6291 44.9728C27.3168 45.2852 26.8931 45.4606 26.4514 45.4606C23.7828 45.461 21.1531 44.8201 18.7839 43.592C16.4147 42.3638 14.3752 40.5843 12.8374 38.4034C11.2995 36.2224 10.3082 33.7039 9.94694 31.0598C9.5857 28.4157 9.8651 25.7236 10.7616 23.21C11.6581 20.6965 13.1455 18.4352 15.0984 16.6165C17.0514 14.7978 19.4127 13.475 21.9837 12.7596C24.5546 12.0441 27.2598 11.9569 29.8715 12.5053C32.4832 13.0536 34.9249 14.2215 36.9909 15.9106L39.356 13.5455L39.3593 13.5422ZM41.7211 11.1805C37.1561 7.22552 31.2345 5.19622 25.2033 5.51986C19.172 5.8435 13.5016 8.49482 9.38608 12.9156C5.27053 17.3364 3.03093 23.1816 3.13886 29.2206C3.24678 35.2596 5.69381 41.021 9.96469 45.2919C14.2356 49.5628 19.9971 52.0098 26.036 52.1178C32.075 52.2257 37.9203 49.9861 42.341 45.8705C46.7618 41.755 49.4131 36.0846 49.7368 30.0534C50.0604 24.0221 48.0311 18.1005 44.0761 13.5356L45.2953 12.3164C45.4544 12.1627 45.5813 11.979 45.6686 11.7758C45.7559 11.5725 45.8018 11.354 45.8037 11.1328C45.8056 10.9117 45.7635 10.6924 45.6798 10.4877C45.596 10.283 45.4723 10.097 45.316 9.94066C45.1596 9.78428 44.9736 9.66061 44.7689 9.57686C44.5642 9.49312 44.3449 9.45098 44.1238 9.4529C43.9026 9.45482 43.6841 9.50076 43.4809 9.58805C43.2777 9.67534 43.0939 9.80223 42.9402 9.9613L41.7211 11.1805Z"
          fill="black"
        />
        <path
          d="M68.0493 42L61.6493 18.16H66.3213L71.3453 38.48H70.1293L75.3773 18.16H79.8893L85.1053 38.48H83.8893L88.9133 18.16H93.5853L87.1853 42H82.1933L76.9133 22.224H78.3213L73.0413 42H68.0493ZM99.8731 42.384C98.6571 42.384 97.6011 42.1813 96.7051 41.776C95.8091 41.3707 95.1157 40.7947 94.6251 40.048C94.1344 39.28 93.8891 38.3947 93.8891 37.392C93.8891 36.432 94.1024 35.5787 94.5291 34.832C94.9557 34.064 95.6171 33.424 96.5131 32.912C97.4091 32.4 98.5397 32.0373 99.9051 31.824L105.601 30.896V34.096L100.705 34.928C99.8731 35.0773 99.2544 35.344 98.8491 35.728C98.4437 36.112 98.2411 36.6133 98.2411 37.232C98.2411 37.8293 98.4651 38.3093 98.9131 38.672C99.3824 39.0133 99.9584 39.184 100.641 39.184C101.516 39.184 102.284 39.0027 102.945 38.64C103.628 38.256 104.15 37.7333 104.513 37.072C104.897 36.4107 105.089 35.6853 105.089 34.896V30.416C105.089 29.6693 104.79 29.0507 104.193 28.56C103.617 28.048 102.849 27.792 101.889 27.792C100.993 27.792 100.193 28.0373 99.4891 28.528C98.8064 28.9973 98.3051 29.6267 97.9851 30.416L94.5611 28.752C94.9024 27.8347 95.4357 27.0453 96.1611 26.384C96.9077 25.7013 97.7824 25.168 98.7851 24.784C99.7877 24.4 100.876 24.208 102.049 24.208C103.478 24.208 104.737 24.4747 105.825 25.008C106.913 25.52 107.756 26.2453 108.353 27.184C108.972 28.1013 109.281 29.1787 109.281 30.416V42H105.313V39.024L106.209 38.96C105.761 39.7067 105.228 40.336 104.609 40.848C103.99 41.3387 103.286 41.7227 102.497 42C101.708 42.256 100.833 42.384 99.8731 42.384ZM120.779 42.192C118.816 42.192 117.291 41.6587 116.203 40.592C115.136 39.504 114.603 37.9787 114.603 36.016V28.336H111.595V24.592H111.915C112.768 24.592 113.43 24.368 113.899 23.92C114.368 23.472 114.603 22.8213 114.603 21.968V20.624H118.795V24.592H122.795V28.336H118.795V35.792C118.795 36.368 118.891 36.8587 119.083 37.264C119.296 37.6693 119.616 37.9787 120.043 38.192C120.491 38.4053 121.056 38.512 121.739 38.512C121.888 38.512 122.059 38.5013 122.251 38.48C122.464 38.4587 122.667 38.4373 122.859 38.416V42C122.56 42.0427 122.219 42.0853 121.835 42.128C121.451 42.1707 121.099 42.192 120.779 42.192ZM134.29 42.384C132.562 42.384 131.004 41.9893 129.618 41.2C128.252 40.3893 127.175 39.3013 126.386 37.936C125.596 36.5493 125.202 34.992 125.202 33.264C125.202 31.536 125.596 29.9893 126.386 28.624C127.175 27.2587 128.252 26.1813 129.618 25.392C131.004 24.6027 132.562 24.208 134.29 24.208C135.527 24.208 136.679 24.432 137.746 24.88C138.812 25.3067 139.73 25.904 140.498 26.672C141.287 27.4187 141.852 28.3147 142.194 29.36L138.514 30.96C138.194 30.0853 137.65 29.3813 136.882 28.848C136.135 28.3147 135.271 28.048 134.29 28.048C133.372 28.048 132.551 28.272 131.826 28.72C131.122 29.168 130.567 29.7867 130.162 30.576C129.756 31.3653 129.554 32.272 129.554 33.296C129.554 34.32 129.756 35.2267 130.162 36.016C130.567 36.8053 131.122 37.424 131.826 37.872C132.551 38.32 133.372 38.544 134.29 38.544C135.292 38.544 136.167 38.2773 136.914 37.744C137.66 37.2107 138.194 36.496 138.514 35.6L142.194 37.264C141.852 38.2453 141.298 39.1307 140.53 39.92C139.762 40.688 138.844 41.296 137.778 41.744C136.711 42.1707 135.548 42.384 134.29 42.384ZM145.374 42V17.776H149.566V28.016L148.99 27.408C149.396 26.3627 150.057 25.5733 150.974 25.04C151.913 24.4853 153.001 24.208 154.238 24.208C155.518 24.208 156.649 24.4853 157.63 25.04C158.633 25.5947 159.412 26.3733 159.966 27.376C160.521 28.3573 160.798 29.4987 160.798 30.8V42H156.606V31.792C156.606 31.024 156.457 30.3627 156.158 29.808C155.86 29.2533 155.444 28.8267 154.91 28.528C154.398 28.208 153.79 28.048 153.086 28.048C152.404 28.048 151.796 28.208 151.262 28.528C150.729 28.8267 150.313 29.2533 150.014 29.808C149.716 30.3627 149.566 31.024 149.566 31.792V42H145.374ZM172.439 42.384C170.754 42.384 169.25 41.9893 167.927 41.2C166.604 40.3893 165.559 39.2907 164.791 37.904C164.023 36.5173 163.639 34.9813 163.639 33.296C163.639 31.5893 164.023 30.0533 164.791 28.688C165.559 27.3227 166.604 26.2347 167.927 25.424C169.271 24.6133 170.764 24.208 172.407 24.208C173.73 24.208 174.903 24.4747 175.927 25.008C176.972 25.52 177.794 26.2453 178.391 27.184L177.751 28.048V17.776H181.943V42H177.975V38.64L178.423 39.472C177.826 40.4107 176.994 41.136 175.927 41.648C174.86 42.1387 173.698 42.384 172.439 42.384ZM172.887 38.544C173.847 38.544 174.69 38.32 175.415 37.872C176.14 37.424 176.706 36.8053 177.111 36.016C177.538 35.2267 177.751 34.32 177.751 33.296C177.751 32.2933 177.538 31.3973 177.111 30.608C176.706 29.7973 176.14 29.168 175.415 28.72C174.69 28.272 173.847 28.048 172.887 28.048C171.948 28.048 171.106 28.2827 170.359 28.752C169.612 29.2 169.026 29.8187 168.599 30.608C168.194 31.376 167.991 32.272 167.991 33.296C167.991 34.32 168.194 35.2267 168.599 36.016C169.026 36.8053 169.612 37.424 170.359 37.872C171.106 38.32 171.948 38.544 172.887 38.544ZM194.355 42.384C192.648 42.384 191.091 41.9893 189.683 41.2C188.296 40.4107 187.187 39.3333 186.355 37.968C185.544 36.6027 185.139 35.0453 185.139 33.296C185.139 31.5467 185.544 29.9893 186.355 28.624C187.187 27.2587 188.296 26.1813 189.683 25.392C191.07 24.6027 192.627 24.208 194.355 24.208C196.062 24.208 197.608 24.6027 198.995 25.392C200.382 26.1813 201.48 27.2587 202.291 28.624C203.123 29.968 203.539 31.5253 203.539 33.296C203.539 35.0453 203.123 36.6027 202.291 37.968C201.459 39.3333 200.35 40.4107 198.963 41.2C197.576 41.9893 196.04 42.384 194.355 42.384ZM194.355 38.544C195.294 38.544 196.115 38.32 196.819 37.872C197.544 37.424 198.11 36.8053 198.515 36.016C198.942 35.2053 199.155 34.2987 199.155 33.296C199.155 32.272 198.942 31.376 198.515 30.608C198.11 29.8187 197.544 29.2 196.819 28.752C196.115 28.2827 195.294 28.048 194.355 28.048C193.395 28.048 192.552 28.2827 191.827 28.752C191.102 29.2 190.526 29.8187 190.099 30.608C189.694 31.376 189.491 32.272 189.491 33.296C189.491 34.2987 189.694 35.2053 190.099 36.016C190.526 36.8053 191.102 37.424 191.827 37.872C192.552 38.32 193.395 38.544 194.355 38.544ZM215.166 49.04C213.865 49.04 212.659 48.8267 211.55 48.4C210.441 47.9733 209.481 47.376 208.67 46.608C207.881 45.8613 207.305 44.976 206.942 43.952L210.846 42.48C211.102 43.2907 211.603 43.9413 212.35 44.432C213.118 44.944 214.057 45.2 215.166 45.2C216.019 45.2 216.766 45.04 217.406 44.72C218.067 44.4 218.579 43.9307 218.942 43.312C219.305 42.7147 219.486 41.9893 219.486 41.136V37.168L220.286 38.128C219.689 39.1733 218.889 39.9627 217.886 40.496C216.883 41.0293 215.742 41.296 214.462 41.296C212.841 41.296 211.39 40.9227 210.11 40.176C208.83 39.4293 207.827 38.4053 207.102 37.104C206.377 35.8027 206.014 34.3413 206.014 32.72C206.014 31.0773 206.377 29.616 207.102 28.336C207.827 27.056 208.819 26.0533 210.078 25.328C211.337 24.5813 212.766 24.208 214.366 24.208C215.667 24.208 216.809 24.4853 217.79 25.04C218.793 25.5733 219.625 26.352 220.286 27.376L219.71 28.432V24.592H223.678V41.136C223.678 42.6507 223.305 44.0053 222.558 45.2C221.833 46.3947 220.83 47.3333 219.55 48.016C218.291 48.6987 216.83 49.04 215.166 49.04ZM214.974 37.424C215.87 37.424 216.649 37.232 217.31 36.848C217.993 36.4427 218.526 35.888 218.91 35.184C219.294 34.48 219.486 33.6693 219.486 32.752C219.486 31.856 219.283 31.056 218.878 30.352C218.494 29.6267 217.961 29.0613 217.278 28.656C216.617 28.2507 215.849 28.048 214.974 28.048C214.099 28.048 213.31 28.2507 212.606 28.656C211.902 29.0613 211.347 29.6267 210.942 30.352C210.558 31.056 210.366 31.856 210.366 32.752C210.366 33.648 210.558 34.448 210.942 35.152C211.347 35.856 211.891 36.4107 212.574 36.816C213.278 37.2213 214.078 37.424 214.974 37.424ZM234.217 42.384C232.361 42.384 230.74 41.9467 229.353 41.072C227.988 40.176 227.049 38.9707 226.537 37.456L229.673 35.952C230.121 36.9333 230.74 37.7013 231.529 38.256C232.34 38.8107 233.236 39.088 234.217 39.088C234.985 39.088 235.593 38.9173 236.041 38.576C236.489 38.2347 236.713 37.7867 236.713 37.232C236.713 36.8907 236.617 36.6133 236.425 36.4C236.254 36.1653 236.009 35.9733 235.689 35.824C235.39 35.6533 235.06 35.5147 234.697 35.408L231.849 34.608C230.377 34.1813 229.257 33.5307 228.489 32.656C227.742 31.7813 227.369 30.7467 227.369 29.552C227.369 28.4853 227.636 27.5573 228.169 26.768C228.724 25.9573 229.481 25.328 230.441 24.88C231.422 24.432 232.542 24.208 233.801 24.208C235.444 24.208 236.894 24.6027 238.153 25.392C239.412 26.1813 240.308 27.2907 240.841 28.72L237.641 30.224C237.342 29.4347 236.841 28.8053 236.137 28.336C235.433 27.8667 234.644 27.632 233.769 27.632C233.065 27.632 232.51 27.792 232.105 28.112C231.7 28.432 231.497 28.848 231.497 29.36C231.497 29.68 231.582 29.9573 231.753 30.192C231.924 30.4267 232.158 30.6187 232.457 30.768C232.777 30.9173 233.14 31.056 233.545 31.184L236.329 32.016C237.758 32.4427 238.857 33.0827 239.625 33.936C240.414 34.7893 240.809 35.8347 240.809 37.072C240.809 38.1173 240.532 39.0453 239.977 39.856C239.422 40.6453 238.654 41.264 237.673 41.712C236.692 42.16 235.54 42.384 234.217 42.384Z"
          fill="black"
        />
      </svg>
    </>
  );
}

export default WatchDogsIcon;