import React from 'react'
import styles from "../Styling/bag.module.css"

const ShoppingBag = () => {
  return (
    <div>
        <div>
            <img src="https://images.dailyobjects.com/marche/assets/images/other/offer-baners-updated-homepage-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1" alt="" />
        </div>
 
 
        <div>
            <h1>SHOPPING BAG</h1>           
            <div id={styles.sidetoside}>  {/* flex */}
                <div id={styles.left}></div>
                <div id={styles.right}> {/* right */}
                    <div id={styles.rightInside}>
                        <div className={styles.flexIt} id={styles.blueBox}>{/* blue, flex */}
                            <div class={styles.first}>
                                <div className={styles.icon}><img src="https://images.dailyobjects.com/marche/assets/images/other/gift-icon.png?tr=cm-pad_resize,v-2" alt="gift" /></div>
                                <div><h2>MAKE IT A GIFT INR 500</h2></div>
                                <div className={styles.icon}><img src="https://images.dailyobjects.com/marche/assets/images/other/information-icon-updated-02.png?tr=cm-pad_resize,v-2,w-14,h-14,dpr-1" alt="info" /></div>
                            </div>     
                            <div><button>ADD+</button></div>
                        </div>
                        <div className={styles.flexIt}>
                            <div class={styles.first}>
                                <div className={styles.icon}><img src="https://images.dailyobjects.com/marche/assets/images/other/offers-icon-324-280px.png?tr=cm-pad_resize,v-2" alt="coupon" /></div>
                                <div><h2>COUPONS & OFFERS</h2><p style="display:inline">SUMMERSALE</p><p>Coupon Applied</p></div>
                            </div>
                            <div><select name="" id=""><option value=""></option></select></div>
                        </div>
                        <div className={styles.flexIt}>
                            <div class={styles.first}>
                                <div className={styles.icon}><img src="https://images.dailyobjects.com/marche/assets/images/other/gift-card-icon-2024-1388.png?tr=cm-pad_resize,v-2" alt="gift card" /></div>
                                <div><h2>REDEEM GIFT CARD</h2></div>
                            </div>
                            <div><select name="" id=""><option value=""></option></select></div>
                        </div>
                        <div>
                            <h2>ORDER SUMMARY</h2>
                            <div className={styles.flexIt}> {/* flex */}
                                <p>Item Total (----- Items)</p>
                                <p>Rs. ------</p>
                            </div>
                            <div className={styles.flexIt}> {/* flex */}
                                <p>Discount</p>
                                <p>Rs. ------</p>
                            </div>
                            <div className={styles.flexIt}> {/* flex */}
                                <p>Shipping</p>
                                <p>FREE</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.flexIt}> {/* flex */}
                                <p>Grand Total</p>
                                <p>Rs. ------</p>
                            </div>
                            <div className={styles.flexIt}> {/* flex */}
                                <p>(Inclusive of Taxes)</p>
                                <p>You Saved Rs.-------</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShoppingBag