import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Montefalco" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Montefalco", 
    locationNames: {label: "Montefalco", href: "montefalco"}  
});
