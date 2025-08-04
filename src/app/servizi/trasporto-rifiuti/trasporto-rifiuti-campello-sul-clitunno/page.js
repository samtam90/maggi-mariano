import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Campello sul Clitunno",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Campello sul Clitunno", 
    locationNames: {label: "Campello sul Clitunno", href: "campello-sul-clitunno"}  
});