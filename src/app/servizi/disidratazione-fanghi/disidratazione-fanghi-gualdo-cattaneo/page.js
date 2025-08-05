import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Gualdo Cattaneo",
  canonical: links.servizi["disidratazione-fanghi"]["gualdo-cattaneo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Gualdo Cattaneo",
  locationNames: { label: "Gualdo Cattaneo", href: "gualdo-cattaneo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
