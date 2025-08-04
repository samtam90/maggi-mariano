import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Ferrara" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Ferrara", 
    locationNames: {label: "Ferrara", href: "ferrara"}  
});
