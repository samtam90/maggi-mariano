import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Bari" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Bari", 
    locationNames: {label: "Bari", href: "bari"}  
});
