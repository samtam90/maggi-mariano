import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Foggia",
    canonical: links.autospurgo["foggia"],
});
export default withBaseProps({ 
    title: "Autospurgo Foggia", 
    locationNames: {label: "Foggia", href: "foggia"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["foggia"],
        name: "Foggia",
    }),
});
