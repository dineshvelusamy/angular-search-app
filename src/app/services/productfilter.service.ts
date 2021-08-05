import *  as  productData from '../../assets/productContent.json';

export class ProductFilter {

    searchText: string | undefined;
    onlyStocked: boolean = false;
    productJson: any;

    setSearchText(srchTxt: string, onlyStocked: boolean) {
        this.searchText = srchTxt;
        this.onlyStocked = onlyStocked;
    }

    filterProduct(srchTx: string, onlyStocked: boolean) {
        var result = [];
        this.productJson = (productData as any).default;
        if (srchTx && srchTx.trim()) {
            for (let i = 0; i < this.productJson.length; i++) {
                 if (this.productJson[i].name.toUpperCase().includes(srchTx.toUpperCase()))
                    if ((onlyStocked && this.productJson[i].stocked == true) || !onlyStocked)
                        result.push(this.productJson[i]);
            }
        } else {
            for (let i = 0; i < this.productJson.length; i++) {
                if ((onlyStocked && this.productJson[i].stocked == true) || !onlyStocked)
                    result.push(this.productJson[i]);
            }
        }
        return result;
    }

}
