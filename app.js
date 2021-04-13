import xmlToJsonModule from './xmlToJson.js';

let pobString = 'eNrtfWlzGsuS9ufRr-hXETNxbhwj907jOZ4bCCGErBW0WPqiaKCAlppu1AsSvuH__mYtDd3QS4GRZZ_DTMQ9FtSalZX1PJlZxV__fh3ZwgR5vuU6n3elPXFXQE7X7VnO4PPu9dVhydj99__t_HVhBsPz_n5o2fib_9v5r7_IvwUbTZD9ebcC1QLTG6DgJmpKeYDPxqYTDJHrnJqPrtdwe593r4Zo37Mc9AWa2RU6ptOzgs-7Z66DdoWubfr-mTlCn3dvraA73BVMv4ucXm3-ed1GI-QEpm35wa4wMi2n7XafUNDw3HAM498VJhZ6OXV7ULZ5enHeuooNwnLYINpD88n0rF2Yx3_9dWGbU-S1AzMQfPifz7tVEIc5QEcW9DAx7RCaUmStomp7iqjtfsytdGCO4H9XqNceI9SblVf3REMrS6pM_ld5_0oXHqr3-6gbWBNU86ygNjSd7nx-srynZU5tnfKnoR1YY9tC3qyOlFX-aKl5SRSzCl-5oDQHF-15WUWRylJlTzEq-XXcuRpktg7qOty3Qb4r9oDrNQeOFaA1Kl64lu86a84pXi1zWjV31IG9uuqsomrVyWCVaqemY9ZcP4jVyV7PdhDTECWzzRZ6TpSUMkseoNeYHik5DcZLVoysgk1nPhG5oue0lyipatkDnLgBmNbiZTux-vM9ocrlPOPT_YRLN53ufPLZ1gAXvXY85CNvErclOV0kq1wgDwx6wLNhccUWGqD5fMuSsVfJ7egEoe6wAYdCywxQsZywws1KaVq5kisnXDouJ0WW8xpOk5OhK3xVFuVklPckXZc0wxArhpzbSFJmsDW0vXJe-RVlVneQN5i2hxay5xMzFD1XdPFKcRFy9ZKcEFeV9DkZyl7mMOsT04_vLa2s5s-IlueazCmCkwEq9NDCcbXBGhee-4hPaXu1alVv5IZecTkyZ1qYa8oXw6lvdeGgIXCohXphN2G6pEzpztDGqTshUI_AFgB087p7UqZC79uABhdBQZ75s-20KplGvRoEZvfpwO0NuEVMOlmpxqHlgch8K3YSZtvXeeFzQKA1czw_SrKPZ7ypONufF15sP3sNT6zBMHAA4HP3slBjsavMnkCkrr_QS0kVOYovdpGtyu4LlBxicuOvVvrUnOOETJN96CHn25S7_URxrg7qTi_0sOJx97FYY7mbvz4S9of_1RyNXS8QgKEF1W7XDZ3gyPSHn3fBCPUU0VTKqloRjY4hwdmn9Mp9qazDQVZR-0ivaLpJj9y_aqbd9cloms44DASHkL2R5XcfOmG_j_ncLozOI6y0fnhYr101b-psAvEq_pNl2w9OOOpgBkH_O6cQbUTMkNB1bdsc-wioYN-0fWjbwqwQ122D6e0GXOWBfzC6x1P61vS6ngXy5ymMSQfXkAmn4ymJyRVXQVhQ00b8AruajhFWHp9XZswM8pQmlIqrJOVCfBMkfItvGVDXnHKVnCEOrtJ1G1UtG59ufFI7hY1AD0a-8nBMeVYnDDi1jfAFrnFgwMw1wThK5BoxBSJcbTOoxlOWHQ18ugY4gHs1DlAfgRZz7mZiJa7MJ-Qw8xnZu7_IFvIFH2xoA438_SlQ7UMstQXynSjweTfwQmi7h_pmaOPPL0PTtoIpHPpi_OMT6p3DH_pD96Udjse0HbxpfZD6yQn9pmoHrAncSTR4OjU8QuJpqxJcRv4m4yfuNtvs4C6qXlcoCfuwMl2hjYJwjN2IZsfGkqCD9W0XAzS3NxUi1LnQKG4Pd_lff8EgWPWG7XZMW56J057PaIBGTbwaKDB7ZmB-bAYw9I94_B9Jc_AvGBV0jP9oEh3r7iaalaKxPdO5N8mWJ8KbfYbPycWp4KMGI2LWJOng1HKI27MdjkYurNoFWLnA9EdUQTYwpdnaQZ9D6mSczYx9Of9m9VnKBdMczg-6TU6G-Pu6JoZvi7OJfbXh6RBILtS7Q3fzE5oh2QvkoMAzKe1ZnFtOqQvTC8jO2vCkZ10K8T43Pv-Zg_7Q7Yb-8sxTv3-rOc86E2hvG59tzXUCD2w-WGkE8DRiuYuTzii24dnOexHi3dATitrEFSx6wwXh-VxG_QgBlgnWsucx27k4jJUsPTW7LTjCybgTS5D2TazLNRUv18CQPoV2ACeBsNzt_JQgJWiBjz9XVIc2jDZdVtil8NNlRcaTK6vYiH-yrIjbIF1WS1_9FGGRXnOFFRvXTxZWs5uhVgtf_BRBQZ-5YpqNaU0j2bYGli24fYH4fYT_MUfj_xVuTDhwWodcphPmO8E-mfc0nXgO530yg9ii1Syva6Pk5z--Zvm4LCFNriXb5GHedLoeMoG8VeE_531KuJcP84xim9XfWScC7gXLhPXzdrM-CLPQakqRDa_8fLqzLj5ulgriTdnCEBi5oY9PuNg0U75bmB_rcu3lpCYh6kIgfaxpcoCLmYAqarZrPgkf2bl5YPpDTv7tBv7PYd4wSjLIJAOff7p5jjqTy5uQbmi9HXoZvHv-5cYdDHhWtO0NbwmiOlhzYjNa_IybmfEu01xff7rjpI26rtO7tZxeyhL2ehY2O6Zdc127575s3sbR7gXS_5p7_9acIHwWANObWNTjSCHHEXrl2v63yBxDJelHLIDEpVwXC1vl4i12x7I8frpS1ULPR-cOSRZcov2x7zasTLDggRt2h5u2CSBJEqufwBDiYDDx8WYXMdH2uocioAZ_lR0g_4QzsGab3oIYo082LEHW7KYhkxWQzuNIafbRZmcwa3fN9a_7Pg7HCLeuN8pd_hZ2gEo_YfFvAcbGD1b294btH2l0fSAJO6bu9Ab4RF4UWkQyNxq1kd4qalO1A-Q5ZoDkFeDixs4K6W8UudF4wRSOoeAQyoWd5uZf-HrTs3rBsVRgi2tEcrQfCOSkz7Wg5FsFN2ZC-LHIjrZWYCddEpll3lwG60Z6tB8J9KQLIafoW83-jSI_XGfDmwZ_pF8i-DM7XSRurvc-ASDp1wgArS2vnx0Ekn6RINDaAvvZgSDpFwgErS2sdw4GcVnTN40HSdt40Cpw_W3jQatTlh-PCUn_lJiQtI0JRTEhToL_o2Eh6WeFhdai-mtEhqSfHhla_WBbLzok_fzo0Ipb_w2CRNI_Jkh05VmDAeAP5unmtAC_fGRo9X3_htEh6fcJpmxs3fZts4f27WSu9tKHb2USSEcC7emHgkQvH2FD2OTYXXVzyD_hhPx1g0bSrx004piCwnukz-z814u8UwB_u9kpzTRzNR13LHtByyn5rDrWyGReqB9XddxLpqTpEH5XVV9j9L-WopMJbNZ_MwsrpHtxUr_-ab6cecwjz6OzMMaFPcX-Re7hXXkICSbVdtKPJLPrb_CXEFiBjWC03QADpNijVHgOsFUct4ev08llWVQ-qJKhfpB0UYZ_Goouf5AqWvmDZBi6_kGWK_IHRZRl7YMkqbL4QS5X5MoHrSzr6oeyUvmgKHIFipUlXfmgqapa_qBr0OiuEMAAY29rSQp7LguPQGHbsg6GCfXO8GCYply3Tsg__msYBGP_08ePLy8ve2MzGLp99GrZaK_rjj6OoRmYd4mIsIQ7-liF_9uvntaqjfFB_dAy9AGy251ms3J01zo5fg0avdJLNTyv1Rtu58E7_Uw6-xj19hd9k8unXbO_iJDwaCVdloxdAYZKFJFdQ08pJ0mayFFOlwxF5SmnaobCUQ7WqMLTnmro5QpPe4okcRSrqGJMKqqaVU7R9fh0lXJmQVXlm69UMXjmK-tlWeMopyhljadf2CaKziOYcqXMUUzTpAqfuuDX2Dimq1Z4lk0XywpPc7qsxEanSJlapcM8uKSsKzzjU0VV5BGLIok83UqyLvEsrqorFZ5y5YoeF0slc3UrmsEjZkmtcPUryZLOIz5Jkco84pMNtcylVbpUiSm9krnN8asZfOosGwbXghiGzKVXFaPC1a8a11PFyJRgWZb4zCSnGZLLKteEVUnn6VcFlVa4JqzrOp_d4NIYDTrmsWuKXOYan1rRDb5jq6xzyU-CglyGQ-c7ZuBY4JJfpSzJPAehJsHBxTNAvcJlKfWKxLNukqgpKRsJwOQc9MAfABtT8aOcgx8JclQqumowuEgRIEWKmgbYkGBETdXgKwCYlQ9S2ZAlBjMp-qRgk6BPiiJlSVEinKmLsMkY_lRgfTUApKJhMPypgqaJEQLFQFVVKu-NP_f370bh_rFvTbty7bKmvt5cyoF06HS-PZtPp0fjW7dzLR0DaZ-EveGhMZDum0q55tSazcvaxWXrpK9_22LTXw-bcoOwd8KmvGiNF2PzglNeGMFr-3jhFbfR3TQ85cWTvPCUk1PwwlPeQ2vT8JT38OWFp7wshRuecsNOThjLi_7eDZ7y4mdeOMkLT3nhLi885YWTvPCUF-5uGp5yE7h0uLY2T-b0RvCi4g2D03SnBS82VVbCpmVV-QDHn6wyaKqDCqYAUlWuGFKEP8sYZooKqU4g5wxhftCgIiBRUTGgKRH3g7GupIqAZymGpZBXUwxRXoa5BBRTZFtRjAg6U5BLgS2FuqohVhQGcimwpqAYA953R7nD-4n3-nh3vO_cte5lQx-ND8alm6DRGvuOWe77-_Xgwbt4NP2r8_L5oKZ-64yvpRNT6TWf9_Wb5wag496w_vTsTA_GL8Pb9smkNxhWfed8EgIa_lt5aXkR0NZL-3O8tLxAjhcJ8yIbXvvOi4C4EdqGgTA3AudEwrwH0HshYV4cwnvO8zInXmb3bkiYl7JtHbU_yVHLi_x5EfN7OWo5A1q8QJjXhcMLmDcMhNMdZbxIWC1CwhSXxoL6-UhYl8uAXyVJNBJ4mALTCBBLepli1zgqJr5eAo0pTqUAmSJX5sgtw1_UMUwwNQXpFDKDcdIqDAtTnEwxMwXRsqyWI7Ctq7IkUlhNQTPB6suYmYJ6BsWBArwnZj4L7WN_8CgmMbOJXvW2o92K9-MXq-cFlYvjLy7xBB_eHDya4SR8PVV95-iu9XTh1tRK6QWw99V1WDkxh5P2F7vfLJ8_6uIAwb9Ozc7hfTOsyLV6Y3wgB-Jt5-XzPxJH8-KsLY7-MdzBi3u50x14PX-8-JPbpcwJyDae8MBJ-LYe5R85rnkDUdt8hx-F0VuH8q_lUN4wjObl6bxwe9PZDuluHV4creXhaACfLFs27ldWVBFgLoPTBKb-KJyWFFWP0DNxWmN4LVekSoSMQWZqhJ51OAYZsKawmyL9OOymSbxz1E0xP4HrcdRNsHQcdFOgTUG3JIqKRDE2Rd4UdBO4nw-6AUfgffROqPuL_q1-aJlqfTQdXn2ZNM6az43ekORj3I_LR-MvfbvTGjm1YzlUROPpeXBT00vqbee1HnQHpcubXuml8TiU6-js-Sx06t-sabd20b4sDU4e5dpVyZfO2mXRJ3kd5fPh12mtO2mMvumiMz04vNlnHu3958uK17vtn26R-G-c28HrMeY0uJt2aPMiHF4gzh0R5CQyvMCPl8j84onHK2So_D0c2rxEkBewvxcQ_-X92bxM4e_iz-YlHr-6P5vbs7HhyBC3g2HDHu10xxUvEtdXQuIU89IUY5aJDMCUgnJ80GqRB5kAUwrQMaAl4LQAq8eTjeEQUxK34pbAuyYaMpRQcVuMGszhO0H2FL3Hk0hAVFrk0aagOw7fqY97Bt-pn5vgdgbKCXoHvgAgPA7fJUMqq5HPHLMEQiYo-mfJ1ISFpOSZVHRFixgIZhzvDt8POmM5kI794c2l92odyJUmTqe-l6uXR7f9swScJ-nUB-O72kVLrt8zWO-bX75Onw9PhxjWG4eX4_0bkphif22UghNfP706Pzl-ORrfH-jVEDvRz9rH04dJuzR5ModB48HuNxuPg9tOZfDUb54FjRvmZK9PvwFd2ML6rYP97RzsG05UeTcHO3-GBx-w5wXsvHxs61__pS4UbjO2tw7238LBzo2vOR0Rf-tElXIOrC9jBEtQPQHYFJsTrB7Pz45Dc5YoTeAzBcsAdjWJ4GQKfOO3BinEpeCWUgiKx3Od-ZQbUFZAUDSlAJII8CyFA1CyECcBFEbHSABF_pQFzK45wvAURS1XorwWgt3jyeWqIooiowE0yWaO5vNzZyh_ICSIEgbGlmi0QAT7-UGCkSmUvxB6wWgALkxJFRxm-LR4r9SZb9364aBZOXS-NXoWSTMnKTNmt3nTvfOdE-uqGp59nR5ND26erLJyPf3meaeA8r1Bu_Pl8PTZuBOt8aFzayJA8fptDR30hg2SaqOUDxqWbTwDim-dfG1ePHjnlze34r1eatdeH7x2a1Kufwu_ueMH67IE7ONw9HB3fIid_sFz4wXZgwp0_60zVmXXLT0evx5_cc1Os3m5X-2bSt9xt8zg92UG7-Tw58743bDDn5fgbPgdFN7jbtO0gPc45uQFvCjgV-cFm85f56fX7-Tv54WXvLyAF9ZuOu-GF3Zz85aN-_s3HY_g5Uvvlb_Of0OGzzGSdLT8sINn05k36Y4CXmJgcBEDhm6p155AcIJMM6mBKokYiBOCoOKJJGgCRdyUKGhQoRLRBVXGAFtTDY2fNDDIPk-o1wG-q1ESDOEPLBKhq7rEIDZB24xREFTOEVXA5CZGJxgxYClBmBMQCsKgPgH2hAHEyQThVyxiQB9UIeESyrJiZIKSkQSZIHQIxkUy7qUoryhOJlhuE-FQjOvAx4xOsKACplbvSyeG98YUHZTQ8PnSQE_j0q1T-7Jfu-mayoU17YbH57VXqd-Uqj1jIJWr8om8TCueOiW5dnkvX6hf5EAaOe5FR2nKtfr-2D-3B7L-9a6Fb8FeTdvPr-64_2Vw8lhvS9MDva8-HV7fdiqll-OpMe1eIvv1tOzr1UdRL7Vu2_s3l5PzMcnwLwXHzw3xtnd51zXPjw90QjNG4r33-ljy1aEJNMMrB83nLc34BwQg3odmbDrBn_uCMycd4T3uOE_PTacVcadR_U3SijYdf-DmGZtO8N90_GHTCf68MPm9rsm-G8_4x70YwxuR_FtclP3BBP_KRuMPEqBfNUE1ADKVlZ9JOCggZ7SDvgxD8DfF3BR_UyZCgiKEh1CcTnkIpQ8SjQtgHkIDAByBDcpmYkyEUgnKRChDoMyBUjRGRQhpS3ARyjcIGWFv6mAWQ3lFIsNJFjH1mD-kQ8MgJEpDeSG9jCwDzIRiFZIrBQyFkpgoF4ywLo3MiKaLYdr1y0U2rm7b4xdrcPnoDVelJK175e74fBJ2WqPm7UT_9jBwa6psoi8XXvfR7Kv71a5-CxRlMQIyqPgkAnLzZF3eXDeOzOFE0w-OX4_VCxIBuZZOPO387PlwVLosWd1JWZxMW0BdDm8O2l-s9vPY7p2pr65aCr5MGs3m5YP7YCpXnfGWmmypyYrUhBczbzw1ijfywgvC3ykE8l5vrf9NUqM2HQLhTqHahkB-kDrxPj3-TplR_EyHkzpx38l-rxAIpw9nw5GN97rx8GOpUbgPDm6ilo1y9Fs7EgGyMaKiAeItoisU_bLIiCGWi0gL4Q34fgKNtFDyQrOCMFVY5jFZFwpUemODcKAYs2FPExFOooDJkuJXOBjJIWiekhwK-BmcJ0SIUSMamSD8gl3ioJSF0JxYEhTLuaKRieJwC6UgCZqDb38QlgMFypQ7MbpCOA4lHHGOQ3nIIsWhfC8eb1GgSyl5B5uSHsKmtDLJJyNkjrIcFvtRNRGP1oCFYW_iE_KnwdTLjBQSbve-NMcqV6_8h9v-6b18Jp9Ozscs8nItPU30C7d-HHgHcbpzWlNf6rUSGn6dnnm9xujb9b4yPfjqz25Vn_r69G7go9B_uamdhU9uyRXv253mzXW9U7pCF3fHZ81n79U6PAV61LoXnQHQIKA73cdLnLgVBI2-_i2iQcdfPEKDjqcGoUH4lvdNq36xX0WXOLGrFJwQGtR4fGQ06OFuckMSwUqe7HaMp5v9Yanafhg8j270vjr0x8MvX7pN69C7_1qahOf2YHtNZJsM9lZUaNPJYLxYftOXELmP-A1ng3EiEN4oDfcd9n_YJZFNJ4NtL4lsL4n8Hq8wcSeD_T1uiaS7Rnio0MnEWIUIUWgcJ0Lk6I8uaJQr-NWkJVYEx0d5fr9bAmyfCOJUwJAmuBG9LE6vadP7HIQmETuVIEuUr1COQ1E4e94UalK2QkwCo2IsEEOvZIOJj2JDhGLEiRXQADURH6JcgPIqyrooF1jiVVFQBvMqSiZiV-MBmpWjXyhgPISyC0OVlejOCA0wycYsi02HkTFahY__-LUYdpOlmFVFuWuzh2Np2GmexRanUkpZx2Ja-sEF9n4soV7sh2kJLaacNx47SiFWlM2C4kAzIp4KCfTFgkdxWsU4M6Z7lFVRAkwY7buzquvG0fm3yr2hGuaxen7dqTB2Vf46HZe-9jtmtwns6tSSZf88rNf3pa8NvaQrF6P765PjqfokdkrAopq3wJKql18OT8MH7-y-6ZaCwdOTf_h1Wn0USdDpdWCQoBOqtq9OztDLl75Kgk-PnfHNk3XW6B8fHt7UJo2zal-0xlfXE_XLpI0OZPG2d_jFHjmuXlKa4t3N0FXPbWBRRwv5cU7zot5WSv7r2Cf5cd8w6_pydR6ePZP8uLPSy9PFOGh00RO5nK_oExKkqg4dJby-l7_cf71C543pqO4-uEbroGL35UD2R9XtC7jbINTbMS_en0DjvYbD-7uTnBzjn3UNZ-P5cZzE8Jf_vd9f_f3b7TWc7TWct3l2i9NDtengEq8H7dfJjzuZVH4sBJXCvMoyQH6KtYF2GGKCeRGawtKwCB-iVIz-6hrG2rJG8usIKWMQnD7DRQgahemUplHeZEg41EEYGyVCjLIRaJ_B2FgMhTA2ShQpZcKMjT0XRhibXMEsgXATdtOeUjDACZiaVTApy2Ns7EIOfVorFtWR9QomnoYmRa-ZUfpCKRslN4lnCUjWG6GMjJrRPD5C2WDo-N_0rtQiZaNRKMzYotcAMD-iDIsj348yvIyHDChdY6mHMbrGiF8sFEYIJouF0RcWCGWOXz6itHSZs7HwIuZslC1T5sZIGw0gxkgbDdSlhMLePeMvCoWdXzQsdGA3HvrWxHF9pyYZz317__rEVK5u24osmp39-sX90ZfB5US_GL8MTy1ReeyYr1-ntWrjPGyEPpC5Rs-akzm9rw78fu_x8L5ZvTx-viw9eN07IFOlyom63_zWOXvWEmSu3Z1cnVxMWzjj76ZWGQAJfNXbZ437A508mLx_cynXWodOb3o2afduT8zpXUTmGo-Duxv3orNf7euiw8hcpfRCyNzj-I5cdnrQvwGZm3Zvxfunb96jabUpmbtQv-ilq_aXp06JXHYKqv3-c-W5IZWrtQZqv_TK9tjuuiW38-WuPWhWmkNTvnnwyo_bjMItmfttMgq56Qgv6-POseN-jmCzKYXcl4_56Bx3ePHXZnP_uMfWtpedtped3iaOxhtZ_6f_KiAmc0Ld6Q3MERIayPSEK8ChK9A7XdNIzhlG2AyWy5ooJ6geIVY8MTZK26LfNMEkDyMQxunY8wCEDVGuxwI4NEYW43qUWmIjzlge5WCU5VEKmEXz6KUiwvJY1I2QNcLyCK2gLI8yNkpAsARUxjQoHSXPJmh4WjGSF093jH7sm72fDJ_DXBU5CsvRTEfCoyi9i1IiyU0qmtJIyRP7jRbMlSgpjPO7WEhO1zU9LSQHH6uU4BEGxsPv8kJyUK9szH4UHb8lTR-upnmWMXrH4p-EtbJ7X-TXbICAFUXkGIXE7I45FYD0ljMzHdlz2TSkGYvJve-D1RG9A_pyLZ2cHdrOt8dX914-bk2Uuym54BX0v5Cn6_RSud9pX1Uf3FLz9qlx5NZPjsYHt-2rZnCmTtHB0etAV1G1fdO9_zo96Zbu7Uvy1N3hqFR7nT7qUrW7X7XL1XJpcjfpVftPfr118PIo9pundxfkVyAVoFf4gerW2eEX_dtZ-KTfNsV779g6kHXjDujY3THQsFFYqxxLd0HrXrx-vmMxusHl0fGXMXtA-6Hvn-IHtMfTg1f8i-6nZud4_-ZRvA8aLVdV5fHIIb_wPmw8jA_0EhocXpILYjQz8tSpN--_-Q_X_XCeGXnhtY2nr_dfK15vS-fei85Jxu_6RB7vG9bv9Js4C7TF2N4Pe4usSN6Hx_-mT-Sp4jY2t70fRqb1294P4_R6bTrmxp-N-cu8kXcyAfS8JqGjJG45UrfM3JK_e4N5GqNf9IYYYVWUT1G6lKBIhAGlPFkxfxePyJ1RGaiq6DxUhvBQQmXy-QthLnG6wn6GnlAPRjcwucjK8Ytl97EcTxrmJFe1CPWlnJXcsyNxTRrRpDQ1HqqkIUlCU5cv1bE3QDSDkdes-3OURFL6GJHF2LPk7IeI5uE-yoQoO4X_VankojAtJYQs7keYNqOEhFdR6kyfzyCBSBqUpDQ4SgwlvxcaeziQXaPDFJW9XUipa_xtD0Ipo6c8MOsm5DF6hWTOBqPw4ZwNUiJOCDZ7hZCyQeJUoL9DSvWZ-Brib0FSXwMlg8S18L5k8BFpUaxvzEigj6-9fe13rqcn5-Hh6AZIXbkUtl86k170mkdrUr47Prq8nLR7h06rPX70yt3H1vB2v4oSr3bU2_LlzV2lASSs5L0MHfIKh0piZiQBUi_p5WrrfvKtdff0su_cKerztAskk8QUR7J_9Dq8efW6pZPjae31pV5T90_m1-zq029XrfZZw8Tvp7v67eFd4B0_Tlt3F53Lu55cN_vqjTF4evbkmnlzcHkknbWBHDYr55OnTssp1R47YyCZ5Noc_jHVkvWoNx6HI4eQQ3_avXU78ol4dwFkEMihZAzH_oNbeb4kDzNaTu3M61mH7jZ58zcmiO_1uCEnQdz044bcPxLFm1zKC1T4397YbPom91V7TorICwh_cYr4i7xuqIp_l4tz8vbi3D8z4MfrSvt73JtbKXvzr4-YAeJ_nLkBIt81na4d9lBPMD0kmLYtMHhKELDgB2jsfxAGaCT4KAjHvmA6PVLMI-Xhj9CxnkMERYBfdoeu1UX-3s7OkfsiBK4Q-ujTTkmoDV3Xh-LJxi1HCIZI6LhB4I5KNuoHQs9zxz33xRFGyAk_0M56j6EfCFM39AQbTZAtmAGpF7hjaLpKv8YfoFdzNLbZUFxPsEZj12M1cZt-EPb7wosVDEnxJvn6Y_2VlNoPLbsn9JEZhB6at4tnTnqlM38OTdsKpoLVFxyEQGx4cq7TtwYhEcc0GFrOQPAQ1DGdIJpiA1rB1aOiZgC8QgjMDsjWD7tDoOTC_zyHbvC_By4erzA0QUhXpmW_WE7v3_QrPCX6rxvTtIWWNRgGyA194dDCfXcDa2ICH2GFYYRW8D_m2PX_18fL0NvZaY_wwjl45fGiVKNVJPKCIj4Z68iFaXsImAqsAVGMft96hS_70H8wBOH7thtQMcIoPXOABM-1bR-ahHn6tEzPdWjnARHUTHDQBvkbdMMPzCleS1PoIi8wQVRseWFI_hAvmG09IdLcB6JyLgzP88n3PdQ3QzvAowsEWfwoizA9srzQ8Mh0oDd7OpMJFgYWAZ71BdNAvBGE_wGF-V_hhHT7B_7kX1DiCAQL6tAbwC7DC9emiv9HG_M1H5dIk3_s64TL5Y8m7EzycTUazSEQySc_9k180UFFQKgD5HTRv4U_EgpDBofL4MJ4PiC6U3eCYJ0CgXSP1w3-sKdpVaserXnodkMfav9bePlI_xBuEayVgxenPQSzIcC_6RctrM3LTaVqKW4u-kPYd93AT6nZpEqGHDSaCteOg7wJG8mVZw0GyIvGslxVKqlC2xpYoAh94cJ9gbLtALTPz5krFMAfmd6U9HEKQ-uHtoN8X6jZsL-hjezKpv1iTn0ijBBke2L1EWmlOnBgj1jdpapgXyO7-hfWphsLvYDdNL3usB14n3d3hW-uO7oDo62Jxp4iqboqYvy1S_T9CGzPqTn-vNs3bR_RskQ1MbejRfB0Dqx-H3lYP_zPu4EXspJfP--W1D2ANnJFK8NJbpQpdP2LaBndCgj_G9QZGtzFCtSGXe70qMDJx7RncmTgooKFDxjq7WiZHuzfT0Kr2qrv7Js-TP8WTNrOBVjsIepO6V81z-zDrvwk4IHBdwhMxyfhP57pDNAncU-Uje9w4HjIBP07NR2T9q3PSp65Dkr-0Q77PH9cUvvyCYzBDjv5Pgn7Jfj_HSLDFnr-JOjGDhh92-pa-Ftp5z-gPv6nron14KFnjkCZPrD_0A-_s5FL3_9Q9JIq_uu_waKz4QtwpoJWHJDyO38aIjU9r9YoHAl4bjzNd6m8vs8kpH3_Q9VKmprdEz7cT91eC1cQSDWynHSp2OG_-D20S0sotMRfH_Hyztd5AosLxxXxBZOG1OSiX581L6-jZT8wyT4FWwSaHXRgjE_I22m5UzCK7SdkOjs3tLlPAqykIO_pe-L8o1rogfIGO204IrvYgM--kRNtcC2oJiYXVBHjYmvYbgfaq8EcrC5uOPDwgVIbmrB5dv7DJg2Lm5C-WNJy1nlWS07U0sVSOa_WvOifrIclbflTS2hQHUzjYAr22EJ2b0eCifWJzuBjE-AKmMBECaGFukMTzo2dOwx3SO8-O1HAeGEzTqefrx8yrwbllFDTdQx_pWfakiNkj1CwcxR2PAtss-V1bfizyJyo8tycYPNcTikjqUmTY6Tbl4SNwid6C_mWH2gpBTT9e821e4sFsu1Qq9QCxW3ELVElrrjizp_lxOLjuSwqBFUSrOHwIYEcdABEmaPP8bjin6cvQzlnd9OFgN1d8zAEAz0jWNl5Mb2eUJ8iZvAD-j33fJXkfBVFiW-WqjfCWoshclLvZ0LXZfn7H5WSLCU2WVxeH4iESBts4yebuoKm_Bj6hpm13dBO-3zf7U3TPsfwIUP3YXyJHZQmdjVT-3GHTAg7FFyiAcjVLNwAkpTcAEZKmUpltQ1QMfTvJxjcOmA1UpWc8-Qt5Z-_4uKhmaP1GtHu2aiKVRwQU5awQTsmyIexesA7wKCyv4tErWhvY2vSTEnC1uSvRY74Wxs0OIuGJfp8hSVRjcwlITu3DXgcs0C2HmfoFQjIBhcHRLna4hhaweLA6q29OPF9UU7AGJkBRw_5YA-66APwWfM7lreHemE3ZvZiKDNZeA5bZa2kYGDSJaBHeBkih3CbMebelDRGTgKyCDXM_mFdByZxXQC7HmH_BNWFt9WZTFibY1IlJcemAgPduXpxS1ewFDNGWp-YOKj7MXE4_KtQwUS1WMFWNbRYIzeMNKhuNfJ0K6IcWgIrk8WHUweIOTvvWsxxAtpCNQSgJKYtWG0Itm0xXwPTQMDz2BFh2h-6MOQPdrTIH7zZIs_18s8_jJIk_2uuJvjYTtML_82gER21P0aYfi3yMNg4YklOsrC5qwXX4VDYFJywy_BXtkJn0-1DGzuVDkx_yHT7AAY2eg4RrEnbtsZj5L3TKVaoxxmWdBUbaST0WHk7PaYaIcXM7cLCJxRn7h8QF_0DNRemjDE0dAAteFM6FIwjE06731LFlQIVNzgdDXoOFamOQptQkWtnYM2OqSMTcLID-Dz0nkPX8hErl_Q6KHuSxOt2WGpprnWykmE9q7btdmE5fUIKhAPPcrAXhEr8Eb2AYsGKP5gBkO5OGCRMn6RjueMFO0CvQOmxXxzbv6YTQDWL-H7j7glJXMetkXRQyJpYUhYcGwUNkanYoIvfE-4LZcl9QfSVFo-jj6ziRJXVxJTaQegQEezb2P0cbRjqy1gYny_0XBzEEHoIPgMBeiaHa0zmdVvklNAKS-g5hr2Sadixk33nwgxN-q9VfKhY9GqBmcfy1jfh9ODEumJs_yiVNI9rBlj9E1skJc01pqbYR3V1-7gq8JSyl1POAZ7IxibExNEq-kchuCxzHMrSpg_lDO6ZvZiqmLuYcVNBFlPDJ-Lywr2Zq2utdcx2ylQ7U98XjrEtp8vYDqYDMK3CDRwVG1lTw3inNZ3hrGrO8h6ZviBRKWDjS6r8ZEelLKfCg7rv4zNSuHW9EcCDEE7uW0B7Q8F17CmJTBPyavn_b-fa8QFCULtqAjmZ-kE64IwbLSNNEJEAZGJJSMiYuBDxp9iFGcI5hOPfO7OPSDQc5ohjnLAEcbpODJ-ahlxJ6V6GPNKMThRtpgHbWRR19dhc3Jk-j81J4nJRRde_E-xMz91zhxYt_5aRu4qYHdST5JSoXgQBa2AKSIAlHONCisAEDCi6Z_UtzMboMOnAlhA4DE1SSpI2985AKwTUHLhhx0ZsFMLL0LLRLGo_7z9aanOuhHT0MyfPNcm5ISRjrbChlMA9qRu0UCHfVhEVYwVFnFVTDaa_EbSkyJICX_X31FW9kuCeqZiepPDQ0GCGbr-Bvr6N4lVyFO_gop0ZTwx9swd7BrezkehitlN5JrVTKmH8bdPp2yE-uuSHZa0sV_TvB8ieIDr2Ok6RWYDcWOr4oJHSfSwrOWHWilRKMQbsdbFaWQ7OjBPMXs8imTa2EFgjfpQnaWnxvLUgRKmSDfLPkOl1pjgiOLIQi4vnlU9XOiNP6VAfOSSzbBOqx8UI1ELVuxhO_SvzCTlVfzZNPLy5Hq5DBfO8eWkg69fQtFXVCXsAcaIZiJBYUmbd-p47Eo5giEKABYszN-caNPNDZPq91MiypeJapkuxcDAOxNuu-YSHAipmkaGdmN3nEHkYYoJaJx1f0p4S93tRX5i4_JHG5x1TFztLXcxGafb_8ewcORlznLu0PsgflIR7SpJEOFmSJx-L1KRlBUQNqYlGFBH7YFduBEaTdFlVYCxSihti3m1y9H_-IYl0-NlVFjpJSTNK91zH_YC3GNcNreCDwHSTqaQV6SLRTdJOB8FRj5hnLj7sH6hJKiZHCcMe45Qkkke4Qzyh5xP44NQMANfk-8qKk9U2mIxU7NVLjVjnoYzCmPWt6dmu1-Mz-Dxxmez4YkyzYnA418pnhBb5HH6x_lh2GcWZsx6lv1noW9aySeJbRsU5cvc4guRykRq_XUqMVCknlVaSOZxcv1BOTHlDK_kfoEOBOyIGOAPwZqyeVrR6Pz3TQdK0NRb1_VIdyr9zqkN5A3HgYt17x2wII9tyaWKef4knH-IodAJe0vUmuRGFtLzI3Gnfo0s1507SX7X6aZuZRFHeJlFkbZ67xYtOTA70Q-z_wlJYdLilyuMn52BUOHMwyrlkdJaFUQ2-WZ4VQaZD1-rYiIatWdpExP0_CYfICyw73Ruw7uWQeE9zjZb0wgSNyPOSkqIgfWchZx4iFqudenUkTdnSKiXZJn6jiadW8pYKO1JyjXlOrywFZaUGlq7J6GuLLTkWA7izuEJbadk17JKbw4JuZGtizB5Zn2pUElp9DmHn4x3m_1jCiPIzU0pySpQLS-ScsLKUc8JiG0pjpzfIG4GVJSuxTo6KngIixQU6GwvwZIcMV0s6XKIJfCYqNfvBWCX74Q-tVM68qQJHlZyC8-TN5LMsQtQ5OoXzC382P4boZV8n6RvHMSJVoFdD_TlrJvGcdZMsxCIKQ5UKeWDdzc2pmCgZb6tiaUz07VRs4eSCM0DMNuH_OB3Lo8n5qTwt1EMwk02GZlZK1sIhQseMAC4-6WJxwocN5FuvrJKp-UE6V36QoS6rnb4McWQ15bxnCB87ltfMdc4JXZdLcnK7FCeN5uTpywuJy6fVRrO2sx92OsRfVwfSiSNU5AQl7z2QZKHADJ3ukMO6AWnElS5MWC7Tbjp4kkEkICmNJJLyLTTCjrt9G5gD9CIVhuNiq6slnWFajLtVRy7Q6GiBgJRISsIfmlw5jYYYZh-aY2gW4fRmMgvgRM3RKHRw1jOsYzRWoRd6-D9UWKjfBwKww-YzLwT4I_Qzs8XKaWtScx1MxWi0IloXonCzdamRrjnXZLaxj4D6QbUauXbtZy_KgeWTlIsL1_JdR-KUf_Iq-9IKyIn7s2wM9J0XIl2SnEF7TEq2npQsK5IvVyNVrkOw5f7siZm2ZePIz0ymt6bX4xcqm8A1jD9bkLBMPop0J0uO8kLQEQsq0uMMMZF2_VwFZEXyxVRJE1P9dYw8C5-JyItk1YCJWUHMMDQ9aLn9ZDmr6uABu50sZwptHz6noeRbnJfDlDZTeuWk9Awx5Zp2mqCSBiEaVp73QWEcKd370ApHM1cD3sFul7SXkFxh4FvmjXIrCw1nbFEjK569EIamTqzaLEmK3mpIE1vWbQ3mlFipiXhM2sAcX6Un3kqNJKciaelNsOclVpgRie-v2VIyVUCnsHeFht4wyGy8B9NPzQwWeY3PZWh1n_wFa13twc7AlgG9jQWKnJrEpxk3RBlbLenWExfir0kX6Y_ZI4v-SuAyd5BLVTwf7IYKbdOj7AHQRAc7fNkfRaK6QB7GHgm-QKsWXcdR44F8WqX4goaYFJqUky2a6ZvIkFBaCFn5KRLKKYxRXFI2M8f6O0mvsmJwV0nL6Fd_R7nGU0JMn250WuIHhZ0EujjmRAMjG1wENWf7x1wHO0fTsePih9_qU8SzENJ3UpuUrPZ6dBUKQ-WyRqsRKbBqzL0SE7wS8wzkXNlaeHcHmsOkHU5NWVvKW8QfR9nhynIwLUN4Wo5leEPhZZXC65yW71T5RaW68Fmemuo5tuIXknS5vKqkY7aD1EwaEGmzi5BlT9ZfnEVKo6RTmis0GpM8WvKMVMKcnyBzEKJPAljgkPzmxGK2rrGcwCuJvNwm0VXL7FkhCOwUwX9HSRGWpMQddJLbufAR8NQostqL3lL18TO3tN04kYhCm9UuTMrsksg9XhHSqrjU7DXgT56GZWgYVnjzDSvf5WyfJMk6yOggVyDF6iIZ6eqC3x_DP9SDge4_Q2U-yN_FPfW_0x43TCYc08gBDiPsILI8q67Kb62myhuoaXIXzJJ2uBvnH_2fCvHfM7uMWxauLBwHDO3Awp5ib80-Mk7N9N11gd_rvjJtvAFuLM_q4WgQ21nWCP-uDwwSRzkS2k6YK31QPHpHmr67TF6TBp10YCf5eHom_bkgSrqx498ja0-GD5v1A4l34UzjTzunpmeGPeThDWYj1iLLYUhej6rCf8nmoBz3IES2haM6NDW_GgRm9ykS7AlC3SF-ItqnRxnxKEAf5Zxco_bQ7Lkvn4Q_4SQmjtH0l0FuraA7BHHsaexKwPx0zLoagM8-oDKfotFdQCHikvcFaKQeBRIT2ZDtLggKBsN2EUh5lsWRtdhq-nMyV0MkVB1rZMJE6APDlj8yMUIqXPE_pTgAcMJRByYFk264Nr7rnfV1OxyNSC4uLZdIGVPAGlsj1wOVswWauDK7wOt6Qv05xLmLvbyTo7wb_btqB_Ln3YoW_4D-bdFf80iTR8Rtbk1YyLlniL7umRTN7EyoUvUh4bgMFUstG6104oRiBbB-0X2_9BUca3vxzpYK1MnDL7jE0lf4ylYUOowddzYTwsFowG69HEa3XjJK4f1J55dRiL44CpJrC3-wI1beE_9VUJIdvJnFkgaXp-GFGjkdzN2mrE7W1Fqotxe7F8FGYfyLo-hy9weg3N7IcogawDphUjB_7zSjEDVn1LvLLE9WWTICsuzktmN-OaJ1eHk5yrZQH4Mj2nZxHTihiGmG2XWmwg1-ad4zOxYmL7E6lt_FB50D6I16OjLmGCsHasOUEadOILM7JLkUU3wTMbMGjx7lV0lZycXy8xy99EKHi69Wt-dPVc8qNAAfobhy1idmDzEV8HPK7dsYGGd_f-D2BtntECOzcAYulkkuad3pI4TzXmfFjvD8lrtkZHOx2MLPNSxlNy9VOEAdIMm-gF7H2BjSN8CXSp07vm2GQHkxTPqCn3tYLHExNH2SyLfweXJ6-Jh2PfwmGLluGy8deNh9QHcuyb1YtMtRkQzQsFwON3IR30zRN2RZcvuILDwuNP_2FODcBM5bZ7a2B-4VPV9m9iuh_LkVlnU_URyfeB-pMu_lbbCiSgXdJNcnyoPgKkxD-xlFqzRPy2cPOIBlW1QtmE3X8olZq5kOfnCtg-h-i--SWCkiQGa1F_ZSrBSN0tBIPNZWrC6FzS3qwWKxOZCgBCJ9KQprLa8FwKEe3oXxBy6WvgWeAgCyh5eTJbgtFWHzWLhMvtzSaAyLtLRlkt-Sy-eziNa8UEgeEsQmlsJpP5rm0HT9eKpUbhVy7MGfe0Qp2PmXX2V-8GKEk9yTxeWTKK24_My1l1-J7IU9YrNn7OIWmU_4t1_SauJhYBFHSSHNAc4HyC5J5EQBar6caHG-OdOy86Hvhx5xYjY8N3R6PDXwpajREuSYl292E7M8BN76DWUWpHiJWOL8SZLS1CoX6UFz2VLVgFbbmCxlTjOlEoB3P-hkrNFMSeKTJamoBaXJjGPe4_xpxyomJ5-rpLFa84WrAU0O8Y_0ZCxcaiUyoxTB3VgB85jjCSzwtAzrWFBn2TbOK4DSBeyyQPzORlE_LOyYVjOvN1KcoWEom0DA81KUQJLDhrW_iLAWWuRBy_lVlgdNXqWLnzYZmCheLqF8S0Xot3vzNYrYaTrCyauVTkUTNaItkIBprARReNwMIeIpCh8vF08kn5e4B-zhBl60WrFgTEoR2CA-6lLPEtV3GH7jXwLOIsE3PVOqROnmeFsyfDciOaS1RvYglpYpu0K87PyUAWFlV6l6XROsUTv0BrEnCbA_DjQoZ1in5utc3chrHbB8ZClT_PflJTcOztWu2sG8CIkDzmomvqpoi8WFqxc3pwr9Gqrl-NESd8dKeuq9hYyffsmpQV8p4Si48BhLMjWtJO3h1DR2mmZ4t9izZvETiLibMhLelv2csxS4hYz24oaVtBeV_zvNQRsDs4WtqgX3-eKyKGxMizfWwA9okNxBJtbFN5RmVmOlPvSFB61plmVK8_QnFKkirtZFOXZhgOUZzh_LyXkpJ6Vl5h2bt22kZlYuNp90OdLwiMq86OymDBx4PP1VUpZELknGv5ad9rP1OE3biTydSeJyb3MBbrozKTVZNjcmxtNsesbqDzerpDbbXXLEsqeZEsKanRDh_ClPrk4Tu7uEe9XI61RXbhBdfyDOWhyroPEmnlYT2_zMdUr4hHQQe6MmFrfK6ZGnHz1p8XSRXBGm72uxJPTlZhK-2Fhj5WRjWslISR9OBs_4G0_uatp27IW6RdPUQgTkAzzg76LyHT9BQDAM_p1BYvWiAG099vw9NU1Lr-VzdySLybksdMVoEI69LkyKWi7-fqTvOX7yFdqReRY2nkuY1vbMVR1reOHAZa_SJ-1UpjuetxO1wIgt_bxjrtlJ7UIrMGgb6CJ5KAOQKskRmEq37xmpHJzdlVNvWvD9MiZvH0aaWnXTQxMpbZK4Qay5yuKQNTHRHnGpzqgKtAfKhNUIW_3C1hUx7W5ENzX-QR2HxU1KRcdgMvu-uEH5e3oQhaOqkmJeu2mhlqzJkTBHrEE1dTXmk-tGERkv2g3k6ZaUB2c4OgMawMI3Lj3FWRQH73YiVKa4xS3p5AwgL9PNYz30FnWEDVnkh6Ox8vfZmzYsLMRRKbErcqNGHI0l9gRJ3PxDM_Av6OJV_cPAN9vVf8VDQKlt4lhQjM-IC29y7gHa3TPSiVJtmEG9llqVOFndwn1knqblAga24vyVtfjRip2oC1xUL6n4HZm8bK7lVmORqFjT2sL6GSVZ3lDTeir3yrjATL2tQOqW3ozl7q-c_1jPprszvqeHCbkbqHxPCx3yVtfEpT2CO5-FGLHls5y-bXXZjzaxJZ3tnUwzmN6d9H0pIJlSdxbti9UsYnjx6CVnkwplu2YysDnjbWS-y8-D8bVd5KIpIi1pbWqbcSalNa2nwebNNJ26oTh-hSAkpxuJn8ZaM76THxYjkGE5eLtwrr5EOZ-C6WU1WOFbqEVDnDNGXfyO7zzOp8iCv9EYXeYHsoLhAhZNb076ThtI7kYbe9zlOGGNwaj0huRs_VmIM6ct7VKgNtaywkk_5572Av6Z25uaplF8773nH5m5vWrr95rvyMztVV-_16WLNCt2XV7E_kvB-FVbNL4vBulzWyCh9nntCqeSxaVdrF_JTsqppGyzq7zQ46JLJZk4sEpLi2QtnlCwSjvK98Usg9zazfgJX1Y5Vym-E4tXKdmHtv4i8RqAZIf697yshxUaWtxTs0yIFdqI7yL6RFde3Xnsdt4C705avopXuFAp3Rk_sKdWsmFpfS_urniuxsqNLW6wZA7Hys0pWbFMNle7MIwZJTXEGk3uP3EPjow9-cebXfRHAv7GvxCZzP8o8gumtJs43-YNCXFxkE7mN1L4Gi6nOoLjCShc_t-Ulo3F3VNOIsZkfglRakIwfL7mKwXO5ZT0FZ52K2IBgVq33aTPsbz8Iiy3A4dkncRaLnKycBiHxSYzt9xSW5YfTyNgEb2i5tU1my_yHSz2M9-NeX6ttPcfORrX10sIWGM1ymu5vdboyCjQ_Xn6UkpjUTpPrL3Kd3qPzydP0C1nN8USg7Lbg4ngFAZih-SIs8bj8okdu3YvXTPE75-hKKHKZfHIpTdIWWJzbADSstGXufa2iU0siDRGeVPGzyNqSUxYgaUQ6UzvZxOiQaTRNP1qImenzDWUSPla9C0sJICtOz_1u7Lwgj-NvQUuHTozyLHzj-aQJUwGzQzM6fB3-j2nn_Okdk6JSsGPW0piYRNSsUylYqFKxVKVisUqFctVKhasVCxZqVi0UqVY14qlK3NobLHo5GK5yMVykYvlIhfLRS6Wi1IsF6VYLgrHVi4WnVKsdUqx6JRi0anFM1KLZ6RyWKfiGanF-qIWT1rlmHSxvqjF-qIV64tWLBeteNJa8Yy04hlpxTPSi2ekFyuDznHMFC-jXjxpvXjSevGky8UzKhcvY7l4uOXi4RrFYzGKx2IUS9fgOMY5hlss3UqxSlWKTVClWC6VYrlUik1QpVh3K8XSrZSLfn6IAyMVyxYIA0cZDqAkcsAgkQMHiVrBzyotPc4hZzzOIaU-zqFsH-fYPs6xfZxj-zjH9nGO7eMc28c5to9zbB_n2D7OsX2cY_s4x_Zxju3jHNvHObaPc2wf59g-zrHy4xzy9nGO7eMc28c5to9zbB_n2D7OsX2cY_s4x_Zxju3jHNvHObaPc2wf59g-zrF9nGP7OMf2cY7t4xzbxzm2j3NsH-fYPs6xfZxj-zjH9nGO7eMc28c5to9zbB_n2D7OsX2cY_s4x_Zxju3jHNvHObaPc2wf59g-zrF9nGP7OMf2cY7t4xzbxzm2j3NsH-fYPs6xfZxj-zjHr_04BztF0t7bOAIAHQynwinO9CoJ1ziXlyR4eQJJNbL8p_-3U3M7UIrd12iZPSv0Pwkn5J588b0KKS2rIXH5ock-9kmewSwPlV3N6SOoJ9BeSZzzCtr1gayMKF02x2N7iv9BU7gDQRZptnIwRJYnTEw7RLlgN1tmSiUps1a1Vd-RS2fAXHA4l0hAqNkhuZ2c-IvJquaZ_QDfCicXVC481LdePwnxBKM-iXbCbFmj7a7lBJZtmwGQ52YPmQ-zameug3baYb-wjQPLdz0LqCE0Af8e2-b0Af5vVpc0lBgozRv7hKkVa-rBjrwQDz3Km5MVztwe5oQhvpVj7FyG7O6ZuHOCJshuoedPgirG9UHZ-U-XSoNmVRnChen71gSxnLX51zK7yp_8niw9Gyz2Sgd-okEo3x6Ztr1Ya-CRi0OSnOdY25HSusQ-rLgoBSbL7NKJxRPw6mVtRiVFsZT3Uqy8ajcIvuqHds0djWB3wnC2Gvh7aWBm2WhphfnaZmirmmoGL1wLZ5ySOUe6mvhrbV3Fh1EfZ977_grWj_RGBsCm6jew6PGxQAIv5CtlQQfNwLSnfjBTH1ks1Et2dsF_4ezK1kk5XSc1I66T8oJOypk6WaxheuYBm1PXtH03tQF2oyh28xmHTLK1Kb5mGWqkpRq9v4UabUZllHVURvn7qUzbdgPBMUcA0m6ROYaGMFaDb5sxvBYrRPMblXmZyCEVL9SwXVjLWDvicpl9ZAexVpSsrrR5ISWlmSNkj1CsIT2rndi05MxCaqxQJauQHCtUXi7ExCjnirGFz4x4kZTe9t3elN1zmxdUM9qKT09Oa8sN4guSIu7qKLTjkoz8uMSqtFGALx_ScDydIXz0ebcPGooicE85U4pGtV_MsVDtTH3fjA70-LrOqF1K1cVqMl-1JeEvS2PNAaXNpWBQWNVXrJK5zVJVLW1Mynry5ZOCvKFq6nqD1NfrjbNamjSlghVOU6iCFaCWa9WOUlRJX6efAv3LsuAcLSvr7yNpnZmo6ymDtJ7qqcXrs3yqpYh21XbTFGzNmXOZnpRjt3hAa9hBpWjeszNwxQVMF_NaGqatU4lrVy7hFj7gwjFRbW25ymtoor7eZlLWU2BldTVT1zf9ayi1tLbwFZ69mYJS-WBq4cB_AANxrmU-MMtbB30NvVx_IX5AYXjNMq7LuW_4i64huSwuwmFl5LXlu6bF4F_QJcrEMR2FQ1ApRIt7IdS1xaWtc9jx7JhlTsit5wVjyuSTHxmhhD_ov338r5rr9K0BJZzOOIxawXyT3EojaWmwALtCx3VtZDqfd7F3KuKoaVVwhl8L4ccF7ekK1aKeaFoczYorrj6aXWbEvpn2GHqd9-2Eow7ySBgzCmQmKptk0Wum3Q1t4s45dXtAq_3Ag3GAKG_qrWqjnlIROHnT8ccWdQLRa6d-8WD3PdPp-eTG4BD1rlyS5RgbZkoVnPQ5rb7g2xQwJuIxm1cw8uTZDsjgTK-gB4tc4-Kd-az5Q7cLUuBYId8aWPZ5_8J9QR6MiQgqbzxzPXIdPxyhXs31xljeF6YfyG3UXUGnrmGE0csRxCm3hl62x-aLE41ijfqHoW3jGG9xFbLWTX_f9f35UrQtL_T5xcQ_wPnOOUOm15nS-vO10VLqdGzX7bVBidskFzc2yurZQa4Q8T0bmnEdW_00_X0xJ-i8j9PFqWe5_jp2_dBDV9NxrL9ZdKlAMhOwJYiMtEgc9eEYG4KFfQD1QWNTigd4ywdkQ6Me28dFXdigBcR5zLvZOrj5JXPBrXlnq9pi_FwKPhDs8HW-SmJGwQvk9EI7HOWX9PGuI0-TkAhAfmGcJ41vPKfZ1rx6c1WmShxtieWTgCr1Xx-jY--vjxdmMDzv74eWjR9t-L-d_w_UNcVl';

// pobString = pobString.replace(/_/g, "/");
// pobString = pobString.replace(/-/g, "+");

// console.log(pobString);

// pobString = window.atob(pobString);

// console.log(pobString);

// var inflate = new Zlib.Inflate(pobString); // NO VALE
// var inflate = new Zlib.Gunzip(pobString); // NO VALE
// var inflate = new Zlib.RawInflate(pobString); // NO VALE
// var plain = inflate.decompress();

// console.log(plain);
// console.log(typeof plain);

let jsonPob = decompressString(pobString).then((xmlStringOriginal) => {
    console.log("xmlstring original", xmlStringOriginal);
    let xmlDoc = new DOMParser().parseFromString(xmlStringOriginal, "text/xml");
    // let jsonPob = xmlToJson.parse(xmlDoc);
    let jsonPob = xmlToJsonModule(xmlDoc);
    // let jsonPob = xmlToJson2(xmlDoc);
    console.log("JSON", jsonPob);
    return { "xmlStringOriginal": xmlStringOriginal, "json": jsonPob };
}).then((result) => {
    // console.log("result2", result);
    var InputJSON = result.json;
    // var output = OBJtoXML(InputJSON);
    InputJSON = addNotesToJson(InputJSON);
    var xmlStringFinal = jsonToXml(InputJSON);
    console.log("xmlstring final", xmlStringFinal);
    console.log("comparacion antes y despues", (result.xmlStringOriginal === xmlStringFinal));
    result.xmlStringFinal = xmlStringFinal;
    return result;
    // return {
    //     "xmlStringOriginal": result.xmlStringOriginal, 
    //     "json": result.json, 
    //     "xmlStringFinal": xmlStringFinal
    // };
}).then((result) => {
    console.log("Cadena Original", pobString);
    // let pobStringFinal = compressString(result.xmlStringFinal).then(result => {return result});
    let pobStringFinal = compressString(result.xmlStringFinal).then(compressString => {
        result.pobStringFinal = compressString;
    });
    console.log("Cadena Final", pobStringFinal);
    result.pobString = pobString;
    result.pobStringFinal = pobStringFinal;
    console.log("result final", result);
    return result;
});


// TODO: leer un pastebin usando el truco del /raw en la ruta
// TODO: convertir todo en funciones que reciban parametros para poder usar el pastebin
// TODO: Mostrar mas cosas que solo las notas
// TODO: Generar el orden de las gemas con los datos disponibles en la wiki
// TODO: Colores para el texto de manera amigable
// TODO: exportar en pastebin

let objConfig = {};
let loadButton = document.querySelector("[data-action=loadData]");
loadButton.addEventListener("click", (e) => {
    console.log("click", e);
    let inputDataField = document.querySelector("#inputs-data");
    if (inputDataField.value === "") {
        document.querySelector("#inputs-data-validation").innerHTML = "El campo no puede ser vacio";
        return false
    }
    document.querySelector("#inputs-data-validation").innerHTML = "";
    let pobString = inputDataField.value;
    objConfig.pobString = pobString;
    decompressString(pobString).then((xmlStringOriginal) => {
        console.log("xmlstring original", xmlStringOriginal);
        let xmlDoc = new DOMParser().parseFromString(xmlStringOriginal, "text/xml");
        // let jsonPob = xmlToJson.parse(xmlDoc);
        let jsonPob = xmlToJsonModule(xmlDoc);
        // let jsonPob = xmlToJson2(xmlDoc);
        console.log("JSON", jsonPob);
        document.querySelector("#inputs-data-notes").value = jsonPob.PathOfBuilding.Notes["#text"];
        objConfig.xmlStringOriginal = xmlStringOriginal;
        objConfig.json = jsonPob;
    });
});

let saveButton = document.querySelector("[data-action=saveData]");
saveButton.addEventListener("click", (e) => {
    console.log("jsonPob", objConfig);
    let inputDataField = document.querySelector("#inputs-data-notes");
    // if(inputDataField.value === ""){
    //     document.querySelector("#inputs-data-validation-notes").innerHTML = "El campo no puede ser vacio";
    //     return false
    // } 
    document.querySelector("#inputs-data-validation-notes").innerHTML = "";
    let notes = inputDataField.value;
    objConfig.json.PathOfBuilding.Notes["#text"] = notes;
    objConfig.json = addNotesToJson(objConfig.json);
    var xmlStringFinal = jsonToXml(objConfig.json);
    objConfig.xmlStringFinal = xmlStringFinal;
    compressString(objConfig.xmlStringFinal).then(compressString => {
        objConfig.pobStringFinal = compressString;
        let outputField = document.querySelector("#outputs-data");
        outputField.value = compressString;
    });
});

let copyButton = document.querySelector("[data-action=copyOutput]");
copyButton.addEventListener("click", (e) => {
    copyToClipboard("#outputs-data");
});



let scriptUrl = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js";
let promise = loadScript(scriptUrl).then(
    script => console.log(`${script.src} is loaded!`),
    error => console.log(`Error: ${error.message}`)
).then(
    () => {
        // console.log("last script", script);
        console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
    }
).then(() => testLodash());
promise.then(script => console.log('Another handler...' + script));

function testLodash() {
    console.log(_.partition([1, 2, 3, 4], n => n % 2));
}

// let jsonPob = xmlToJson();

function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));

        //   document.head.append(script);
        document.body.append(script);
    });
}

function copyToClipboard(selector) {
    /* Get the text field */
    var copyText = document.querySelector(selector);

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    console.log("Copied the text: " + copyText.value);
}

function addNotesToJson(InputJSON) {
    console.log("addNotesToJson", InputJSON);
    InputJSON.PathOfBuilding.Notes["#text"] += "\n\nPrueba pruebosa";
    return InputJSON;
}

function xmlToJson2(xml) {
    // Create the return object
    var obj = {};

    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof (obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson2(item);
            } else {
                if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson2(item));
            }
        }
    }
    return obj;
};

function OBJtoXML(obj) {
    var xml = '';
    for (var prop in obj) {
        if (prop === "#text") continue;
        xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
        if (obj[prop] instanceof Array) {
            for (var array in obj[prop]) {
                xml += "<" + prop + ">";
                xml += OBJtoXML(new Object(obj[prop][array]));
                xml += "</" + prop + ">";
            }
        } else if (typeof obj[prop] == "object") {
            xml += OBJtoXML(new Object(obj[prop]));
        } else {
            xml += obj[prop];
        }
        xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
    }
    var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
    return xml
}

function jsonToXml(json, initial = true) {
    let xmlString = '';
    if (initial) {
        xmlString = '<?xml version="1.0" encoding="UTF-8"?>';
    }
    // console.log("json", json);
    for (let prop in json) {
        // console.log("json -", json, "- prop -", prop, "- typeof -", typeof json[prop], "- value -", json[prop], "-");
        if (isNotValidPropText(json, prop)) continue;
        if (prop === "@attributes") continue;
        let propName = prop;
        // console.log("propName", propName);
        if (json[prop] instanceof Array) {
            // console.log("instanceof Array");
            for (let elem of json[prop]) {
                // console.log("typeof elem", typeof elem);
                // console.log("-- array elem", elem, prop, json);
                if (typeof elem === "string") {
                    let isElemValueRegexMatch = (/[^\n\t]+/.test(elem));
                    if (!isElemValueRegexMatch) continue;
                    xmlString += '' + elem + '';
                    // xmlString += '<' + propName + '>' + elem + '</' + propName + '>';
                } else if (typeof elem === "object") {
                    xmlString += processObject(propName, elem);
                }
            }
            // console.log("exit instance of array");
        } else if (typeof json[prop] == "object") {
            xmlString += processObject(propName, json[prop]);
        } else if (typeof json[prop] == "string") {
            // TODO: escapar comillas dobles, apostrofes y ampersand
            xmlString += '' + json[prop] + '';
            // xmlString += '<' + propName + '>' + json[prop] + '</' + propName + '>';
        }
    }
    // console.log("return xmlString");
    return xmlString;

    function isNotValidPropText(json, prop) {
        let isPropText = (prop === "#text");
        let isPropValueTypeofString = (typeof json[prop] === "string");
        let isPropValueRegexMatch = (/[^\n\t]+/.test(json[prop]));
        return (isPropText && isPropValueTypeofString && !isPropValueRegexMatch)
    }

    function processObject(propName, obj) {
        // console.log("typeof object");
        let xmlString = '';
        let count = Object.keys(obj).length;
        let elemHasAttributes = ("@attributes" in obj);
        let attrsString = processAttributes(obj);
        // console.log("pre log", propName, obj);
        // if(propName === "Item"){
        //     console.log("log", obj, count, elemHasAttributes, attrsString);
        // }

        if (count === 0 || (count === 1 && elemHasAttributes)) {
            xmlString += '<' + propName + attrsString + '/>';
        } else {
            xmlString += '<' + propName + attrsString + '>';
            xmlString += jsonToXml(obj, false);
            xmlString += '</' + propName + '>';
        }
        return xmlString;
    }

    function processAttributes(obj) {
        let attrsString = '';
        if (typeof obj === "object" && "@attributes" in obj) {
            for (let attr in obj["@attributes"]) {
                attrsString += ' ' + attr + '="' + obj["@attributes"][attr] + '"';
            }
        }
        return attrsString;
    }
}

async function decompressString(compressedString) {

    const decompressionScriptFilepath = '/poe-pob-reader/decompress-string.php';
    const compressedStringToSend = { method: 'POST', body: compressedString };
    const response = await fetch(decompressionScriptFilepath, compressedStringToSend);

    return await response.text();
}

async function compressString(decompressedString) {

    const compressionScriptFilepath = '/poe-pob-reader/compress-string.php';
    const decompressedStringToSend = { method: 'POST', body: decompressedString };
    const response = await fetch(compressionScriptFilepath, decompressedStringToSend);

    return await response.text();
}

// Side navigation
function w3_open() {
    var x = document.getElementById("mySidebar");
    x.style.width = "100%";
    x.style.fontSize = "40px";
    x.style.paddingTop = "10%";
    x.style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// Tabs
function openCity(evt, cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var activebtn = document.getElementsByClassName("testbtn");
    for (i = 0; i < x.length; i++) {
        activebtn[i].className = activebtn[i].className.replace(" w3-dark-grey", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-dark-grey";
}

var mybtn = document.getElementsByClassName("testbtn")[0];
mybtn.click();

// Accordions
function myAccFunc(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Slideshows
var slideIndex = 1;

function plusDivs(n) {
    slideIndex = slideIndex + n;
    showDivs(slideIndex);
}

function showDivs(n) {
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

showDivs(1);

// Progress Bars
function move() {
    var elem = document.getElementById("myBar");
    var width = 5;
    var id = setInterval(frame, 10);
    function frame() {
        if (width == 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}