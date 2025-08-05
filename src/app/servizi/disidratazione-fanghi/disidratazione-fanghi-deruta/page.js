import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Deruta",
  canonical: links.servizi["disidratazione-fanghi"]["deruta"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Deruta",
  locationNames: { label: "Deruta", href: "deruta" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
