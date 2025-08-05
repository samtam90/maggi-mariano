import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Como",
    canonical: links.autospurgo["como"],
});
export default withBaseProps({ 
    title: "Autospurgo Como", 
    locationNames: {label: "Como", href: "como"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["como"],
        name: "Como",
    }),
});
