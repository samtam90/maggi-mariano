import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Pistoia" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Pistoia", 
    locationNames: {label: "Pistoia", href: "pistoia"}  
});
