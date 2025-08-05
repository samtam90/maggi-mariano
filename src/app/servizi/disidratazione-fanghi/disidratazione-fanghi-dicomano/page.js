import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Dicomano",
  canonical: links.servizi["disidratazione-fanghi"]["dicomano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Dicomano",
  locationNames: { label: "Dicomano", href: "dicomano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
