/** Threshold types */
export enum ThresholdType
{
    CV_THRESH_BINARY      =0,  /**< value = value > threshold ? max_value : 0       */
    CV_THRESH_BINARY_INV  =1,  /**< value = value > threshold ? 0 : max_value       */
    CV_THRESH_TRUNC       =2,  /**< value = value > threshold ? threshold : value   */
    CV_THRESH_TOZERO      =3,  /**< value = value > threshold ? value : 0           */
    CV_THRESH_TOZERO_INV  =4,  /**< value = value > threshold ? 0 : value           */
    CV_THRESH_MASK        =7,
    CV_THRESH_OTSU        =8, /**< use Otsu algorithm to choose the optimal threshold value;
                                 combine the flag with one of the above CV_THRESH_* values */
    CV_THRESH_TRIANGLE    =16  /**< use Triangle algorithm to choose the optimal threshold value;
                                 combine the flag with one of the above CV_THRESH_* values, but not
                                 with CV_THRESH_OTSU */
};

/** Adaptive threshold methods */
export enum ThresholdMethod
{
    CV_ADAPTIVE_THRESH_MEAN_C  =0,
    CV_ADAPTIVE_THRESH_GAUSSIAN_C  =1
};