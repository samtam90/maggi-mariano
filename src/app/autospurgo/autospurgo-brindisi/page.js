import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Brindisi",
    canonical: links.autospurgo["brindisi"],
});
export default withBaseProps({ 
    title: "Autospurgo Brindisi", 
    locationNames: {label: "Brindisi", href: "brindisi"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["brindisi"],
        name: "Brindisi",
    }),
});
