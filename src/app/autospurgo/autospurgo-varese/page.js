import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Varese",
    canonical: links.autospurgo["varese"],
});
export default withBaseProps({ 
    title: "Autospurgo Varese", 
    locationNames: {label: "Varese", href: "varese"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["varese"],
        name: "Varese",
    }),
});
