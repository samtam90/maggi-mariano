import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Figline e Incisa Valdarno",
    canonical: links.autospurgo["figline-e-incisa-valdarno"],
});
export default withBaseProps({ 
    title: "Autospurgo Figline e Incisa Valdarno", 
    locationNames: {label: "Figline e Incisa Valdarno", href: "figline-e-incisa-valdarno"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["firenze"],
        name: "Firenze",
    }),
});
