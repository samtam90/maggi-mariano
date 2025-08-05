import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche [name]",
  canonical: links.servizi["spurgo-fosse-biologiche"]["[path]"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche [name]", 
    locationNames: {label: "[name]", href: "[path]"},
    locationsData: getProvinceLocationsData({
      links: links.servizi["spurgo-fosse-biologiche"],
      comuni: comuni["[province.path]"],
      name: "[province.name]",
  }),
});
