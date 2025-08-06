import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import frazioni from "../../../../.data/frazioni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Autospurgo Arezzo",
  canonical: links.autospurgo["arezzo"],
});
export default withBaseProps({
  title: "Autospurgo Arezzo",
  locationNames: { label: "Arezzo", href: "arezzo" },
  locationsData: getProvinceLocationsData({
    links: appConfig.links.autospurgo,
    comuni: comuni["arezzo"],
    name: "Arezzo",
  }),
  additionalServiceLocations: frazioni["arezzo"],
});
