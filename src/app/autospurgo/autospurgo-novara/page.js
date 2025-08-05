import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Novara",
    canonical: links.autospurgo["novara"],
});
export default withBaseProps({ 
    title: "Autospurgo Novara", 
    locationNames: {label: "Novara", href: "novara"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["novara"],
        name: "Novara",
    }),
});
