import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Campello sul Clitunno",
});
export default withBaseProps({ 
    title: "Trasporto acqua Campello sul Clitunno", 
    locationNames: {label: "Campello sul Clitunno", href: "campello-sul-clitunno"}  
});