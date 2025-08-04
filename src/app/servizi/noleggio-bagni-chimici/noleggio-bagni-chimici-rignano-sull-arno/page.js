import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Rignano sull'Arno",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Rignano sull'Arno", 
  locationNames: {label: "Rignano sull'Arno", href: "rignano-sull-arno"} 
});
