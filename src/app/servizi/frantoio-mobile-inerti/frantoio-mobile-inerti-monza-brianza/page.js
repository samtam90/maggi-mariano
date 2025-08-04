import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Monza Brianza" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Monza Brianza", 
    locationNames: {label: "Monza Brianza", href: "monza-brianza"}  
});
