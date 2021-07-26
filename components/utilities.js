function registerComponent(componentName) {
    const componentDataName = componentName.name;
    const components = document.querySelectorAll(`[data-component="${componentDataName}"]`);

    if (components.length) {
        components.forEach((component, index) => {
            const componentInstanceName = `${componentDataName}_${index}`;
            const props = component.dataset;
            component.setAttribute('data-instance-name', componentInstanceName);
            const newObject = new componentName(componentInstanceName);
            newObject.init(props);
        });
    } else {
        console.log('no components found');
    }
}

export {registerComponent};