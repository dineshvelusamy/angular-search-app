import *  as  productData from '../../assets/productContent.json';

export class ProductFilter {

    searchText: string | undefined;
    onlyStocked: boolean = false;
    productJson: any;

    setSearchText(srchTxt: string, onlyStocked: boolean) {
        this.searchText = srchTxt;
        this.onlyStocked = onlyStocked;
        this.productJson = (productData as any).default;
        console.log("Inside prod filter service");
        console.log(this.searchText);
        console.log(this.productJson);
        return this.filterProduct(this.searchText, this.onlyStocked);
    }

    filterProduct(srchTx: string, onlyStocked: boolean) {
        var result = [];
        if (srchTx.trim()) {
            console.log(`Filtering product function with inputs ${srchTx} ${onlyStocked}`);

            for (let i = 0; i < this.productJson.length; i++) {
                // if (this.productJson[i].name.search(new RegExp(this.searchText, "i")) != -1)
                if (this.productJson[i].name.includes(srchTx))
                    // if (this.productJson[i].name.indexOf(this.searchText) != -1)
                    if ((onlyStocked && this.productJson[i].stocked == true) || !onlyStocked)
                        result.push(this.productJson[i]);
            }
        } else {
            // result = this.productJson;
            for (let i = 0; i < this.productJson.length; i++) {
                if ((onlyStocked && this.productJson[i].stocked == true) || !onlyStocked)
                    result.push(this.productJson[i]);
            }
        }
        // let result = this.productJson.some((item: { userName: string; price:string }) =>item.userName === this.searchText);
        console.log(result);
        return result;
    }

}