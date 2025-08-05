import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Rovigo",
    canonical: links.autospurgo["rovigo"],
});
export default withBaseProps({ 
    title: "Autospurgo Rovigo", 
    locationNames: {label: "Rovigo", href: "rovigo"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["rovigo"],
        name: "Rovigo",
    }),
});
