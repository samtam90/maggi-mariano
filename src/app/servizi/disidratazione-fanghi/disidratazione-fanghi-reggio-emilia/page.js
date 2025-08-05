import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Reggio Emilia",
  canonical: links.servizi["disidratazione-fanghi"]["reggio-emilia"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Reggio Emilia",
  locationNames: { label: "Reggio Emilia", href: "reggio-emilia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["reggio-emilia"],
      name: "Reggio Emilia",
  }),
});
