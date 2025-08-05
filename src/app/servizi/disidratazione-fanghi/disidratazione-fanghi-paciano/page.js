import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Paciano",
  canonical: links.servizi["disidratazione-fanghi"]["paciano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Paciano",
  locationNames: { label: "Paciano", href: "paciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
