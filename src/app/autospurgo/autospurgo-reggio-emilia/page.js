import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Reggio Emilia",
    canonical: links.autospurgo["reggio-emilia"],
});
export default withBaseProps({ 
    title: "Autospurgo Reggio Emilia", 
    locationNames: {label: "Reggio Emilia", href: "reggio-emilia"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["reggio-emilia"],
        name: "Reggio Emilia",
    }),
});
