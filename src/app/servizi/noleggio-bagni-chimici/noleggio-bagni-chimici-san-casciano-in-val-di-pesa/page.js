import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici San Casciano in Val di Pesa",
  canonical: links.servizi["noleggio-bagni-chimici"]["san-casciano-in-val-di-pesa"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici San Casciano in Val di Pesa", 
  locationNames: {label: "San Casciano in Val di Pesa", href: "san-casciano-in-val-di-pesa"} 
});
