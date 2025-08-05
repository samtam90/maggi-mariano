import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Taranto",
    canonical: links.autospurgo["taranto"],
});
export default withBaseProps({ 
    title: "Autospurgo Taranto", 
    locationNames: {label: "Taranto", href: "taranto"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["taranto"],
        name: "Taranto",
    }),
});
