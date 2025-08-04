import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Savona" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Savona", 
    locationNames: {label: "Savona", href: "savona"}  
});
