import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Rignano sull'Arno",
  canonical: links.servizi["noleggio-bagni-chimici"]["rignano-sull-arno"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Rignano sull'Arno", 
  locationNames: {label: "Rignano sull'Arno", href: "rignano-sull-arno"} 
});
